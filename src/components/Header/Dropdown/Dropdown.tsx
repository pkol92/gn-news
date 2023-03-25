import React from 'react';

import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

import './Dropdown.css';
import { useDispatch } from 'react-redux';
import { card, list } from '../../../slices/panelViewSlice';

export const DropdownElement = () => {
  const dispatch = useDispatch();

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className="" aria-label="Customise options">
          Widok
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className="DropdownMenuContent" sideOffset={5}>
          <DropdownMenu.Item
            className="DropdownMenuItem"
            onClick={() => {
              dispatch(list());
            }}>
            Lista
          </DropdownMenu.Item>
          <DropdownMenu.Item
            className="DropdownMenuItem"
            onClick={() => {
              dispatch(card());
            }}>
            Kafelki
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};
