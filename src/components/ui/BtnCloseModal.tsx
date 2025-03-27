import { CloseIcon } from '../icons';

interface IBtnCloseModalProps {
  onClose: () => void;
}

export const BtnCloseModal = ({ onClose }: IBtnCloseModalProps) => {
  return (
    <div className="absolute right-2 top-2 z-20 flex size-6 items-center justify-center">
      <button type="button" onClick={onClose}>
        <CloseIcon />
      </button>
    </div>
  );
};
