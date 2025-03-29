import { yupResolver } from '@hookform/resolvers/yup';
import clsx from 'clsx';
import { Controller, useForm } from 'react-hook-form';

import { useAuthModalStore } from '@/stores/authModal';
import { IFormLoginData, schemaLogin } from '@/utils/validations';

import { EmailIcon } from '../icons';
import { Button, Input, InputPassword } from '../ui';

export const FormLogin = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
    clearErrors,
  } = useForm<IFormLoginData>({
    resolver: yupResolver(schemaLogin),
    mode: 'onBlur',
    reValidateMode: 'onBlur',
  });

  const { closeModal, setTabContent } = useAuthModalStore();

  const onSubmit = async (data: IFormLoginData) => {
    alert('Вы авторизовалсиь');
    closeModal();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-4">
      <Controller
        name="email"
        control={control}
        render={({ field }) => (
          <Input {...field} placeholder="Email" error={errors.email?.message} icon={<EmailIcon />} />
        )}
      />
      <Controller
        name="password"
        control={control}
        render={({ field }) => (
          <InputPassword {...field} onBlur={field.onBlur} placeholder="Пароль" error={errors.password?.message} />
        )}
      />
      <div
        className={clsx(
          'text-sm text-right text-orange transition-colors duration-300 cursor-pointer',
          'hover:text-black'
        )}
      >
        Забыли пароль?
      </div>
      <Button text={'Войти'} variant="orange" type="submit" className="w-full max-w-40 mx-auto" />
    </form>
  );
};
