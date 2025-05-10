import { yupResolver } from '@hookform/resolvers/yup';
import clsx from 'clsx';
import { useForm } from 'react-hook-form';

import { useAuth } from '@/hooks/actions';
import { IFormLoginData, schemaLogin } from '@/utils/validations';

import { IconEmail } from '../icons';
import { Button } from '../ui/btns';
import { ControllerInput, ControllerInputPassword } from '../ui/controllers';

export const FormLogin = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormLoginData>({
    resolver: yupResolver(schemaLogin),
    mode: 'onBlur',
    reValidateMode: 'onChange',
  });

  const { login, handleForgotPassword } = useAuth();

  const onSubmit = async (data: IFormLoginData) => await login(data, reset);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-5">
      <ControllerInput<IFormLoginData>
        name="identifier"
        control={control}
        placeholder="Email или логин"
        error={errors.identifier?.message}
        icon={<IconEmail />}
      />

      <ControllerInputPassword<IFormLoginData>
        name="password"
        control={control}
        placeholder="Пароль"
        error={errors.password?.message}
      />

      <button
        className={clsx(
          'text-sm text-right text-orange transition-colors duration-300 cursor-pointer',
          'hover:text-black'
        )}
        type="button"
        onClick={handleForgotPassword}
      >
        Забыли пароль?
      </button>

      <Button text="Войти" variant="orange" type="submit" className="mt-4" />
    </form>
  );
};
