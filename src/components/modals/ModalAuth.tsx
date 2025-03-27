import { Modal } from './Modal';

interface IModalAuthProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ModalAuth = ({ isOpen, onClose }: IModalAuthProps) => {
  return (
    <Modal isOpen={isOpen} closeModal={onClose}>
      <div>123</div>
    </Modal>
  );
};
