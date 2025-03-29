import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';

import { useAuthModalStore } from '@/stores/authModal';
import { IFormPasswordNewData, schemaPasswordNew } from '@/utils/validations';

import { Button, InputPassword } from '../ui';

export const FormPasswordNew = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormPasswordNewData>({
    resolver: yupResolver(schemaPasswordNew),
    mode: 'onBlur',
    reValidateMode: 'onBlur',
  });

  const { closeModal } = useAuthModalStore();

  const onSubmit = async (data: IFormPasswordNewData) => {
    alert('Пароль успешно изменен');
    closeModal();
    reset();
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
