import React from 'react';

import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

import './DropDown.css';

export const Dropdown = () => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className="IconButton" aria-label="Customise options">
          Widok listy
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className="DropdownMenuContent" sideOffset={5}>
          <DropdownMenu.Item
            className="DropdownMenuItem"
            onClick={() => {
              console.log('to do');
            }}>
            Lista
          </DropdownMenu.Item>
          <DropdownMenu.Item
            className="DropdownMenuItem"
            onClick={() => {
              console.log('to do');
            }}>
            Kafelki
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};
