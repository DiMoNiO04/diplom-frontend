import { yupResolver } from '@hookform/resolvers/yup';
import clsx from 'clsx';
import { Controller, useForm } from 'react-hook-form';

import { loginUser } from '@/actions/auth';
import { EAuthContent, useAuthModalStore } from '@/stores/authModal';
import { useNotificationStore } from '@/stores/notificationMsg';
import { useUserStore } from '@/stores/user';
import { IFormLoginData, schemaLogin } from '@/utils/validations';

import { IconEmail } from '../icons';
import { Button } from '../ui/btns';
import { Input, InputPassword } from '../ui/inputs';

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

  const { closeModal, setTabContent } = useAuthModalStore();
  const { showNotification } = useNotificationStore();
  const { setAuth } = useUserStore();

  const onSubmit = async (data: IFormLoginData) => {
    const { isSuccess, message, user } = await loginUser(data);

    if (isSuccess && user) {
      closeModal();
      reset();
      setAuth(true);
      showNotification(message, '/icons/success.svg');
    } else {
      showNotification(message, '/icons/error.svg');
    }
  };

  const handleClickForgotPassword = () => setTabContent(EAuthContent.PASSWORD_FORGOT);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-5">
      <Controller
        name="identifier"
        control={control}
        render={({ field }) => (
          <Input {...field} placeholder="Email или логин" error={errors.identifier?.message} icon={<IconEmail />} />
        )}
      />
      <Controller
        name="password"
        control={control}
        render={({ field }) => (
          <InputPassword {...field} onBlur={field.onBlur} placeholder="Пароль" error={errors.password?.message} />
        )}
      />
      <button
        className={clsx(
          'text-sm text-right text-orange transition-colors duration-300 cursor-pointer',
          'hover:text-black'
        )}
        type="button"
        onClick={handleClickForgotPassword}
      >
        Забыли пароль?
      </button>
      <Button text={'Войти'} variant="orange" type="submit" className="mt-4" />
    </form>
  );
};
