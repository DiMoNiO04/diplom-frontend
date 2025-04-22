import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';

import { registerUser } from '@/actions/auth';
import { EAuthContent, useAuthModalStore } from '@/stores/authModal';
import { useNotificationStore } from '@/stores/notificationMsg';
import { IFormRegData, schemaReg } from '@/utils/validations';

import { IconEmail, IconUser } from '../icons';
import { LinkPrivacy } from '../ui';
import { Button } from '../ui/btns';
import { Input, InputCheckbox, InputPassword } from '../ui/inputs';

export const FormReg = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormRegData>({
    resolver: yupResolver(schemaReg),
    mode: 'onBlur',
    reValidateMode: 'onChange',
  });

  const { setEmail, setTabContent } = useAuthModalStore();
  const { showNotification } = useNotificationStore();

  const onSubmit = async (data: IFormRegData) => {
    const result = await registerUser(data);

    if (result.success) {
      setEmail(data.email);
      setTabContent(EAuthContent.SUCCESS_REG);
      reset();
    } else {
      showNotification(result.message, '/icons/error.svg');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-5">
      <Controller
        name="username"
        control={control}
        render={({ field }) => (
          <Input {...field} placeholder="Логин" error={errors.username?.message} icon={<IconUser />} />
        )}
      />
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
      <Controller
        name="agree"
        control={control}
        render={({ field }) => (
          <InputCheckbox
            id="agree"
            label={<LinkPrivacy />}
            className="mt-2"
            error={errors.agree?.message}
            checked={field.value}
            onChange={field.onChange}
          />
        )}
      />

      <Button text={'Зарегистрироваться'} variant="orange" type="submit" className="mt-4" />
    </form>
  );
};
