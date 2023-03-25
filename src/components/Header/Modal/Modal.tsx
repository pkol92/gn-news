import React, { FC, ReactNode } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import './Modal.css';
import { Cross2Icon } from '@radix-ui/react-icons';

interface ModalProps {
  trigger: ReactNode;
  content: ReactNode;
}

export const Modal: FC<ModalProps> = ({ trigger, content }) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="Button">{trigger}</button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay" />
        <Dialog.Content className="DialogContent">
          {content}

          <Dialog.Close asChild>
            <button className="IconButton" aria-label="Close">
              <Cross2Icon />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export const ModalMenu = () => {
  const content = (
    <>
      <Dialog.Title className="DialogTitle">Tytuł</Dialog.Title>
      <Dialog.Description className="DialogDescription">Opis</Dialog.Description>
    </>
  );

  const trigger = 'Klik';

  return (
    <>
      <Modal content={content} trigger={trigger} />
    </>
  );
};
