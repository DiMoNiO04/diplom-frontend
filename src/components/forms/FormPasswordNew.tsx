import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';

import { EAuthContent, useAuthModalStore } from '@/stores/authModal';
import { useNotificationStore } from '@/stores/notificationMsg';
import { NOTIFICATION_TIME } from '@/utils/consts';
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

  const { closeModal, setTabContent } = useAuthModalStore();
  const { showNotification, hideNotification } = useNotificationStore();

  const onSubmit = async (data: IFormPasswordNewData) => {
    setTabContent(EAuthContent.CHANGE_PASSWORD);
    closeModal();
    reset();
    console.log(data);

    showNotification('Пароль успешно изменен!', '/icons/success.svg');

    setTimeout(() => {
      hideNotification();
    }, NOTIFICATION_TIME);
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
        name="confirmPassword"
        control={control}
        render={({ field }) => (
          <InputPassword
            {...field}
            onBlur={field.onBlur}
            placeholder="Повторите пароль"
            error={errors.confirmPassword?.message}
          />
        )}
      />
      <Button text={'Сохранить новый пароль'} variant="orange" type="submit" className="mt-4" />
    </form>
  );
};
