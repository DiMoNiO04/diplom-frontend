import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';

import { apiChangePassword } from '@/actions/user';
import { useChangePasswordModalStore } from '@/stores/changePasswordModal';
import { useNotificationStore } from '@/stores/notificationMsg';
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

  const { closeModal } = useChangePasswordModalStore();
  const { showNotification } = useNotificationStore();

  const onSubmit = async (data: IFormChangePasswordData) => {
    const { isSuccess, message } = await apiChangePassword(data);

    if (isSuccess) {
      closeModal();
      reset();
      showNotification(message);
    } else {
      showNotification(message, '/icons/error.svg');
    }
  };

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
