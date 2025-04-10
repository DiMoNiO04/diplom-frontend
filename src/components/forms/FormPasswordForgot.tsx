import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';

import { EAuthContent, useAuthModalStore } from '@/stores/authModal';
import { IFormPasswordForgotData, schemaPasswordForgot } from '@/utils/validations';

import { IconEmail } from '../icons';
import { Button } from '../ui/btns';
import { Input } from '../ui/inputs';

export const FormPasswordForgot = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormPasswordForgotData>({
    resolver: yupResolver(schemaPasswordForgot),
    mode: 'onBlur',
    reValidateMode: 'onChange',
  });

  const { setTabContent, setEmail } = useAuthModalStore();

  const onSubmit = async (data: IFormPasswordForgotData) => {
    setTabContent(EAuthContent.CHECK_EMAIL);
    setEmail(data.email);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-5">
      <Controller
        name="email"
        control={control}
        render={({ field }) => (
          <Input {...field} placeholder="Email" error={errors.email?.message} icon={<IconEmail />} />
        )}
      />
      <Button text={'Подтвердить'} variant="orange" type="submit" className="mt-4" />
    </form>
  );
};
