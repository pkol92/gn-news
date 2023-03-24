import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import './Modal.css';
import { Cross2Icon } from '@radix-ui/react-icons';

export const Modal = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="Button">modal</button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay" />
        <Dialog.Content className="DialogContent">
          <Dialog.Title className="DialogTitle">Tytuł</Dialog.Title>
          <Dialog.Description className="DialogDescription">Opis</Dialog.Description>

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
