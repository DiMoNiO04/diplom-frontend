import { Controller, useForm } from 'react-hook-form';

import { useUpdateUser } from '@/hooks/actions';
import { IUserInfo } from '@/stores/user';

import { IconEmail, IconPasswordKey, IconUser } from '../icons';
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

  return (
    <form
      className="grid grid-cols-2 gap-8 max-md:flex max-md:flex-col max-md:gap-6"
      onSubmit={handleSubmit(updateUser)}
      id="profile"
    >
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
    </form>
  );
};
