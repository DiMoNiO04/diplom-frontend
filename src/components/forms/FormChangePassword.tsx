import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import { useUser } from '@/hooks/actions';
import { IFormChangePasswordData, schemaChangePassword } from '@/utils/validations';

import { Button } from '../ui/btns';
import { ControllerInputPassword } from '../ui/controllers';

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

  const { changePassword } = useUser();

  const onSubmit = async (data: IFormChangePasswordData) => await changePassword(data, reset);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-5">
      <ControllerInputPassword<IFormChangePasswordData>
        name="currentPassword"
        control={control}
        placeholder="Текущий пароль"
        error={errors.currentPassword?.message}
      />
      <ControllerInputPassword<IFormChangePasswordData>
        name="password"
        control={control}
        placeholder="Новый пароль"
        error={errors.password?.message}
      />
      <ControllerInputPassword<IFormChangePasswordData>
        name="passwordConfirmation"
        control={control}
        placeholder="Повторите пароль"
        error={errors.passwordConfirmation?.message}
      />
      <Button text={'Сохранить пароль'} variant="orange" type="submit" className="mt-4" />
    </form>
  );
};
