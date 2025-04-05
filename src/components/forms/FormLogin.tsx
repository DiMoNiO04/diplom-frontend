import { yupResolver } from '@hookform/resolvers/yup';
import clsx from 'clsx';
import { Controller, useForm } from 'react-hook-form';

import { EAuthContent, useAuthModalStore } from '@/stores/authModal';
import { useNotificationStore } from '@/stores/notificationMsg';
import { NOTIFICATION_TIME } from '@/utils/consts';
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
  const { showNotification, hideNotification } = useNotificationStore();

  const onSubmit = async (data: IFormLoginData) => {
    closeModal();
    reset();
    console.log(data);

    showNotification('Вы авторизовались!', '/icons/success.svg');

    setTimeout(() => {
      hideNotification();
    }, NOTIFICATION_TIME);
  };

  const handleClickForgotPassword = () => setTabContent(EAuthContent.PASSWORD_FORGOT);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-5">
      <Controller
        name="email"
        control={control}
        render={({ field }) => (
          <Input {...field} placeholder="Email" error={errors.email?.message} icon={<IconEmail />} />
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
