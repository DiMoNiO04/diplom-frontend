import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';

import { useChangePasswordModalStore } from '@/stores/changePasswordModal';
import { IFormChangePasswordData, schemaChangePassword } from '@/utils/validations';

import { Button, InputPassword } from '../ui';

export const FormChangePassword = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormChangePasswordData>({
    resolver: yupResolver(schemaChangePassword),
    mode: 'onBlur',
    reValidateMode: 'onBlur',
  });

  const { closeModal } = useChangePasswordModalStore();

  const onSubmit = async (data: IFormChangePasswordData) => {
    closeModal();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-5">
      <Controller
        name="oldPassword"
        control={control}
        render={({ field }) => (
          <InputPassword
            {...field}
            onBlur={field.onBlur}
            placeholder="Текущий пароль"
            error={errors.oldPassword?.message}
          />
        )}
      />
      <Controller
        name="password"
        control={control}
        render={({ field }) => (
          <InputPassword {...field} onBlur={field.onBlur} placeholder="Новый пароль" error={errors.password?.message} />
        )}
      />
      <Controller
        name="confirmPassword"
        control={control}
        render={({ field }) => (
          <InputPassword
            {...field}
            onBlur={field.onBlur}
            placeholder="Повторите новый пароль"
            error={errors.confirmPassword?.message}
          />
        )}
      />
      <Button text={'Сохранить новый пароль'} variant="orange" type="submit" className="mt-4" />
    </form>
  );
};
