import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';

import { IUserInfo } from '@/stores/user';
import { IFormProfileData, schemaProfile } from '@/utils/validations';

import { IconEmail, IconPasswordKey, IconUser } from '../icons';
import { Input } from '../ui/inputs';

export const FormProfile = ({ firstName, lastName, patronymic, email, username }: IUserInfo) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormProfileData>({
    resolver: yupResolver(schemaProfile),
    mode: 'onBlur',
    reValidateMode: 'onChange',
    defaultValues: {
      firstName: firstName || '',
      lastName: lastName || '',
      patronymic: patronymic || '',
    },
  });

  const onSubmit = async (data: IFormProfileData) => {
    console.log(`submit form ${data}`);
  };

  return (
    <form
      className="grid grid-cols-2 gap-8 max-md:flex max-md:flex-col max-md:gap-6"
      onSubmit={handleSubmit(onSubmit)}
      id="profile"
    >
      <Controller
        name="lastName"
        control={control}
        render={({ field }) => (
          <Input
            {...field}
            placeholder="Фамилия*"
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
            placeholder="Имя*"
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
            placeholder="Отчество*"
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
