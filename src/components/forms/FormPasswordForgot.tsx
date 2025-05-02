import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import { usePasswordForgot } from '@/hooks/actions';
import { IFormPasswordForgotData, schemaPasswordForgot } from '@/utils/validations';

import { IconEmail } from '../icons';
import { Button } from '../ui/btns';
import { ControllerInput } from '../ui/controllers';

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

  const { forgotPassword } = usePasswordForgot();

  const onSubmit = async (data: IFormPasswordForgotData) => await forgotPassword(data, reset);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-5">
      <ControllerInput<IFormPasswordForgotData>
        name="email"
        control={control}
        label=""
        placeholder="Email"
        error={errors.email?.message}
        type="text"
        icon={<IconEmail />}
      />
      <Button text={'Подтвердить'} variant="orange" type="submit" className="mt-4" />
    </form>
  );
};
