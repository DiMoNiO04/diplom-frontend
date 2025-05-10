import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import { usePasswordReset } from '@/hooks/actions/usePasswordReset';
import { IFormPasswordNewData, schemaPasswordNew } from '@/utils/validations';

import { Button } from '../ui/btns';
import { ControllerInputPassword } from '../ui/controllers';

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

  const { resetPassword } = usePasswordReset();

  const onSubmit = async (data: IFormPasswordNewData) => await resetPassword(data, reset);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-5">
      <ControllerInputPassword<IFormPasswordNewData>
        name="password"
        control={control}
        placeholder="Пароль"
        error={errors.password?.message}
      />

      <ControllerInputPassword<IFormPasswordNewData>
        name="passwordConfirmation"
        control={control}
        placeholder="Повторите пароль"
        error={errors.passwordConfirmation?.message}
      />

      <Button text={'Сохранить новый пароль'} variant="orange" type="submit" className="mt-4" />
    </form>
  );
};
