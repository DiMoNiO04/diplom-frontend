import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';

import { useAuthModalStore } from '@/stores/authModal';
import { EUrls } from '@/utils/urls';
import { IFormRegData, schemaReg } from '@/utils/validations';

import { EmailIcon, UserIcon } from '../icons';
import { Button, Input, InputCheckbox, InputPassword } from '../ui';

export const FormReg = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormRegData>({
    resolver: yupResolver(schemaReg),
    mode: 'onBlur',
    reValidateMode: 'onBlur',
  });

  const { closeModal } = useAuthModalStore();

  const onSubmit = async (data: IFormRegData) => {
    alert('Вы зарегистрировались');
    closeModal();
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-5">
      <Controller
        name="firstName"
        control={control}
        render={({ field }) => (
          <Input {...field} placeholder="Имя" error={errors.firstName?.message} icon={<UserIcon />} />
        )}
      />
      <Controller
        name="lastName"
        control={control}
        render={({ field }) => (
          <Input {...field} placeholder="Фамилия" error={errors.lastName?.message} icon={<UserIcon />} />
        )}
      />
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
            label={
              <div>
                Я принимаю условия{' '}
                <a
                  href={EUrls.PRIVACY_POLICY}
                  tabIndex={-1}
                  className="border-orange text-orange hover:text-black border-b transition-colors duration-300 hover:border-transparent"
                >
                  пользовательского соглашения
                </a>
              </div>
            }
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
