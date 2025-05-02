import Image from 'next/image';
import { useForm } from 'react-hook-form';

import { useUpdateImg } from '@/hooks';
import { useUpdateUser } from '@/hooks/actions';
import { IUserInfo } from '@/stores/user';
import { getImageUrl } from '@/utils/functions';

import { IconEmail, IconPasswordKey, IconUser } from '../icons';
import { Button } from '../ui/btns';
import { ControllerInput } from '../ui/controllers';
import { Input } from '../ui/inputs';

export const FormProfile = ({ firstName, lastName, patronymic, email, username, avatar: initialAvatar }: IUserInfo) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<IUserInfo>({
    mode: 'onBlur',
    reValidateMode: 'onChange',
    defaultValues: {
      firstName: firstName || '',
      lastName: lastName || '',
      patronymic: patronymic || '',
      avatar: initialAvatar || null,
    },
  });

  const { updateUser } = useUpdateUser();

  const onSubmit = async (data: IUserInfo) => await updateUser(data, initialAvatar);

  const {
    img: avatar,
    fileInputRef,
    handleRemoveImg,
    handleImgChange,
    handleUploadClick,
  } = useUpdateImg(initialAvatar, 'avatar', setValue);

  return (
    <form onSubmit={handleSubmit(onSubmit)} id="profile">
      <div className="flex items-center gap-x-6 mb-8 max-md:flex-col max-md:gap-4">
        <div className="size-20 rounded-full border border-black overflow-hidden flex items-center justify-center">
          {avatar ? (
            <Image src={getImageUrl(avatar.url)} width={80} height={80} alt="User avatar" className="size-full" />
          ) : (
            <IconUser size={80} />
          )}
        </div>

        <input
          type="file"
          accept="image/*"
          name="avatar"
          ref={fileInputRef}
          className="hidden"
          onChange={handleImgChange}
        />

        <div className="flex items-center gap-x-6 max-md:w-full max-md:gap-4 max-sm:flex-col">
          {avatar ? (
            <Button text="Удалить фото" type="button" size="sm" onClick={handleRemoveImg} className="max-md:w-full" />
          ) : (
            <Button
              text="Загрузить фото"
              type="button"
              variant="orange"
              size="sm"
              onClick={handleUploadClick}
              className="max-md:w-full"
            />
          )}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-8 max-md:flex max-md:flex-col max-md:gap-6">
        <ControllerInput<IUserInfo>
          name="firstName"
          control={control}
          placeholder="Фамилия"
          error={errors.firstName?.message}
          icon={<IconUser />}
        />
        <ControllerInput<IUserInfo>
          name="lastName"
          control={control}
          placeholder="Имя"
          error={errors.lastName?.message}
          icon={<IconUser />}
        />
        <ControllerInput<IUserInfo>
          name="patronymic"
          control={control}
          placeholder="Отчество"
          error={errors.patronymic?.message}
          icon={<IconUser />}
        />
        <Input value={email || ''} placeholder="Email" icon={<IconEmail />} disabled />
        <Input value={username || ''} placeholder="Логин" icon={<IconUser />} disabled />
        <Input value={'*************'} type="password" placeholder="Password" icon={<IconPasswordKey />} disabled />
      </div>
    </form>
  );
};
