import Image from 'next/image';

import { Button } from '@/components/ui/btns';

interface IModalAuthNotificationContentProps {
  imageSrc: string;
  title: string;
  message: string;
  buttonText?: string;
  buttonAction?: () => void;
}

export const ModalAuthNotificationContent = ({
  imageSrc,
  title,
  message,
  buttonText,
  buttonAction,
}: IModalAuthNotificationContentProps) => {
  return (
    <div className="flex flex-col items-center gap-y-5">
      <div className="flex items-center justify-center">
        <Image src={imageSrc} width={80} height={80} alt="" />
      </div>
      <div className="font-unbounded text-xl">{title}</div>
      {message && <p className="font-onest text-greyLight">{message}</p>}
      {buttonText && buttonAction && <Button text={buttonText} onClick={buttonAction} className="mt-6" />}
    </div>
  );
};
