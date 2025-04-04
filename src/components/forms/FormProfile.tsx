import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';

import { IFormProfileData, schemaProfile } from '@/utils/validations';

import { IconEmail, IconPasswordKey, IconUser } from '../icons';
import { Input } from '../ui/inputs';

export const FormProfile = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormProfileData>({
    resolver: yupResolver(schemaProfile),
    mode: 'onBlur',
    reValidateMode: 'onBlur',
  });

  const onSubmit = async (data: IFormProfileData) => {
    alert(`submit form ${data}`);
  };

  return (
    <form className="grid grid-cols-2 gap-8" onSubmit={handleSubmit(onSubmit)} id="profile">
      <Controller
        name="firstName"
        control={control}
        render={({ field }) => (
          <Input {...field} placeholder="Имя*" error={errors.firstName?.message} icon={<IconUser />} />
        )}
      />
      <Controller
        name="lastName"
        control={control}
        render={({ field }) => (
          <Input {...field} placeholder="Фамилия*" error={errors.lastName?.message} icon={<IconUser />} />
        )}
      />
      <Input value={'123'} placeholder="Email" icon={<IconEmail />} disabled />
      <Input value={'123'} type="password" placeholder="Password" icon={<IconPasswordKey />} disabled />
    </form>
  );
};
