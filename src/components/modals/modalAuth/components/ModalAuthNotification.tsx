import { EAuthContent, useAuthModalStore } from '@/stores/authModal';

import { ModalAuthNotificationContent } from './ModalAuthNotificationContent';

const EModalAuthNotification = {
  CHECK_EMAIL: 'checkEmail',
  SUCCESS_REG: 'successReg',
  CHANGE_PASS: 'changePass',
} as const;

type EModalAuthNotification = (typeof EModalAuthNotification)[keyof typeof EModalAuthNotification];

interface IModalAuthNotificationProps {
  type: EModalAuthNotification;
}

const ModalAuthNotification = ({ type }: IModalAuthNotificationProps) => {
  const { setTabContent, email } = useAuthModalStore();

  const handleLoginAcc = () => setTabContent(EAuthContent.LOGIN);

  const formatEmail = (email: string | null): string => {
    if (!email) return '';
    const [name, domain] = email.split('@');
    return name.length > 15 ? `${name[0]}****@${domain}` : email;
  };

  const contentMap = {
    [EModalAuthNotification.CHECK_EMAIL]: {
      imageSrc: '/icons/checkEmail.svg',
      title: 'Проверьте почту',
      message: email
        ? `Отправили Вам письмо с дальнейшими инструкциями на указанную почту ${formatEmail(email)}`
        : 'Отправили Вам письмо с дальнейшими инструкциями на указанную почту.',
    },
    [EModalAuthNotification.SUCCESS_REG]: {
      imageSrc: '/icons/checkEmail.svg',
      title: 'Благодарим за регистрацию!',
      message: 'Ссылка для подтверждения аккаунта будет отправлена на вашу почту.',
    },
    [EModalAuthNotification.CHANGE_PASS]: {
      imageSrc: '/icons/successChangePassword.svg',
      title: 'Новый пароль сохранен',
      message: '',
      buttonText: 'Войти в аккаунт',
      buttonAction: handleLoginAcc,
    },
  };

  const content = contentMap[type];

  return content ? <ModalAuthNotificationContent {...content} /> : null;
};

export { EModalAuthNotification, ModalAuthNotification };
