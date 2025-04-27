import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';

import { usePasswordChange } from '@/hooks/actions';
import { IFormChangePasswordData, schemaChangePassword } from '@/utils/validations';

import { Button } from '../ui/btns';
import { InputPassword } from '../ui/inputs';

export const FormChangePassword = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormChangePasswordData>({
    resolver: yupResolver(schemaChangePassword),
    mode: 'onBlur',
    reValidateMode: 'onChange',
  });

  const changePassword = usePasswordChange();

  const onSubmit = async (data: IFormChangePasswordData) => await changePassword(data, reset);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-5">
      <Controller
        name="currentPassword"
        control={control}
        render={({ field }) => (
          <InputPassword
            {...field}
            onBlur={field.onBlur}
            placeholder="Текущий пароль"
            error={errors.currentPassword?.message}
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
        name="passwordConfirmation"
        control={control}
        render={({ field }) => (
          <InputPassword
            {...field}
            onBlur={field.onBlur}
            placeholder="Повторите пароль"
            error={errors.passwordConfirmation?.message}
          />
        )}
      />
      <Button text={'Сохранить пароль'} variant="orange" type="submit" className="mt-4" />
    </form>
  );
};
