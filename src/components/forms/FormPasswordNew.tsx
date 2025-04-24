import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';

import { usePasswordReset } from '@/hooks/actions/usePasswordReset';
import { IFormPasswordNewData, schemaPasswordNew } from '@/utils/validations';

import { Button } from '../ui/btns';
import { InputPassword } from '../ui/inputs';

export const FormPasswordNew = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormPasswordNewData>({
    resolver: yupResolver(schemaPasswordNew),
    mode: 'onBlur',
    reValidateMode: 'onChange',
  });

  const { resetPassword } = usePasswordReset();

  const onSubmit = async (data: IFormPasswordNewData) => await resetPassword(data, reset);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-5">
      <Controller
        name="password"
        control={control}
        render={({ field }) => (
          <InputPassword {...field} onBlur={field.onBlur} placeholder="Пароль" error={errors.password?.message} />
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
      <Button text={'Сохранить новый пароль'} variant="orange" type="submit" className="mt-4" />
    </form>
  );
};
