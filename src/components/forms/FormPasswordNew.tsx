import { yupResolver } from '@hookform/resolvers/yup';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

import { resetPassword } from '@/actions/auth';
import { useAuthModalStore } from '@/stores/authModal';
import { useNotificationStore } from '@/stores/notificationMsg';
import { IFormPasswordNewData, IFormResetPasswordData, schemaPasswordNew } from '@/utils/validations';

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

  const { closeModal } = useAuthModalStore();
  const { showNotification } = useNotificationStore();

  const searchParams = useSearchParams();
  const [code, setCode] = useState(searchParams.get('code'));

  useEffect(() => {
    const code = searchParams.get('code');
    if (code) {
      setCode(code);
    }
  }, [searchParams]);

  const onSubmit = async (data: IFormPasswordNewData) => {
    if (code) {
      const dataResetPassword: IFormResetPasswordData = { code, ...data };
      const { isSuccess, message } = await resetPassword(dataResetPassword);

      if (isSuccess) {
        closeModal();
        reset();
        showNotification(message);
      } else {
        showNotification(message, '/icons/error.svg');
      }
    }
  };

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
