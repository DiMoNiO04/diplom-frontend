import { Dialog, Transition } from '@headlessui/react';
import { Fragment, ReactNode } from 'react';

import { BtnCloseModal } from '../ui';

interface IModalProps {
  isOpen: boolean;
  children: ReactNode;
  closeModal: () => void;
}

export const Modal = ({ isOpen, closeModal, children }: IModalProps) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="bg-modalBg fixed inset-0 backdrop-blur-md" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-300"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel
                className={`
                shadow-customShadow relative w-[470px] border border-gray-300 rounded-lg bg-white p-14 transition-all
                `}
              >
                {children}
                <BtnCloseModal onClose={closeModal} />
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
