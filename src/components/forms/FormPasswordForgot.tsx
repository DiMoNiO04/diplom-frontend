import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';

import { EAuthContent, useAuthModalStore } from '@/stores/authModal';
import { IFormPasswordForgotData, schemaPasswordForgot } from '@/utils/validations/schemaPasswordFogot';

import { EmailIcon } from '../icons';
import { Button, Input } from '../ui';

export const FormPasswordForgot = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormPasswordForgotData>({
    resolver: yupResolver(schemaPasswordForgot),
    mode: 'onBlur',
    reValidateMode: 'onBlur',
  });

  const { setTabContent } = useAuthModalStore();

  const onSubmit = async (data: IFormPasswordForgotData) => {
    alert('Письмо отправлено на почту');
    setTabContent(EAuthContent.PASSWORD_NEW);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-5">
      <Controller
        name="email"
        control={control}
        render={({ field }) => (
          <Input {...field} placeholder="Email" error={errors.email?.message} icon={<EmailIcon />} />
        )}
      />
      <Button text={'Подтвердить'} variant="orange" type="submit" className="mt-4" />
    </form>
  );
};
