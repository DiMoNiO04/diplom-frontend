import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import { useRegisterUser } from '@/hooks/actions';
import { IFormRegData, schemaReg } from '@/utils/validations';

import { IconEmail, IconUser } from '../icons';
import { LinkPrivacy } from '../ui';
import { Button } from '../ui/btns';
import { ControllerInput, ControllerInputCheckbox, ControllerInputPassword } from '../ui/controllers';

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

  const register = useRegisterUser();

  const onSubmit = async (data: IFormRegData) => await register(data, reset);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-5">
      <ControllerInput<IFormRegData>
        name="username"
        control={control}
        placeholder="Логин"
        error={errors.username?.message}
        icon={<IconUser />}
      />
      <ControllerInput<IFormRegData>
        name="email"
        control={control}
        placeholder="Email"
        error={errors.email?.message}
        icon={<IconEmail />}
      />
      <ControllerInputPassword<IFormRegData>
        name="password"
        control={control}
        placeholder="Пароль"
        error={errors.password?.message}
      />
      <ControllerInputPassword<IFormRegData>
        name="passwordConfirmation"
        control={control}
        placeholder="Повторите пароль"
        error={errors.passwordConfirmation?.message}
      />
      <ControllerInputCheckbox<IFormRegData>
        name="agree"
        control={control}
        id="agree"
        label={<LinkPrivacy />}
        className="mt-2"
        error={errors.agree?.message}
      />

      <Button text={'Зарегистрироваться'} variant="orange" type="submit" className="mt-4" />
    </form>
  );
};
