import Image from 'next/image';
import { Controller, useForm } from 'react-hook-form';

import { useUpdateImg } from '@/hooks';
import { useUpdateUser } from '@/hooks/actions';
import { IUserInfo } from '@/stores/user';

import { IconEmail, IconPasswordKey, IconUser } from '../icons';
import { Button } from '../ui/btns';
import { Input } from '../ui/inputs';

export const FormProfile = ({ firstName, lastName, patronymic, email, username }: IUserInfo) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserInfo>({
    mode: 'onBlur',
    reValidateMode: 'onChange',
    defaultValues: {
      firstName: firstName || '',
      lastName: lastName || '',
      patronymic: patronymic || '',
    },
  });

  const { updateUser } = useUpdateUser();

  const { img: avatar, fileInputRef, handleRemoveImg, handleImgChange, handleUploadClick } = useUpdateImg();

  return (
    <form onSubmit={handleSubmit(updateUser)} id="profile">
      <div className="flex items-center gap-x-6 mb-8 max-md:flex-col max-md:gap-4">
        <div className="size-20 rounded-full border border-black overflow-hidden flex items-center justify-center">
          {avatar ? (
            <Image src={avatar} width={80} height={80} alt="User avatar" className="object-cover" />
          ) : (
            <IconUser size={80} />
          )}
        </div>

        <input type="file" accept="image/*" ref={fileInputRef} className="hidden" onChange={handleImgChange} />

        <div className="flex items-center gap-x-6 max-md:w-full max-md:gap-4 max-sm:flex-col">
          <Button
            text="Изменить фото"
            variant="orange"
            size="sm"
            onClick={handleUploadClick}
            className="max-md:w-full"
          />
          <Button text="Удалить фото" size="sm" onClick={handleRemoveImg} className="max-md:w-full" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-8 max-md:flex max-md:flex-col max-md:gap-6">
        <Controller
          name="lastName"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              placeholder="Фамилия"
              error={errors.lastName?.message}
              icon={<IconUser />}
              value={field.value || ''}
            />
          )}
        />
        <Controller
          name="firstName"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              placeholder="Имя"
              error={errors.firstName?.message}
              icon={<IconUser />}
              value={field.value || ''}
            />
          )}
        />
        <Controller
          name="patronymic"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              placeholder="Отчество"
              error={errors.patronymic?.message}
              icon={<IconUser />}
              value={field.value || ''}
            />
          )}
        />
        <Input value={email || ''} placeholder="Email" icon={<IconEmail />} disabled />
        <Input value={username || ''} placeholder="Логин" icon={<IconUser />} disabled />
        <Input value={'*************'} type="password" placeholder="Password" icon={<IconPasswordKey />} disabled />
      </div>
    </form>
  );
};
