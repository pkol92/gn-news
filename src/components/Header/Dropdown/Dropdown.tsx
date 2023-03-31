import React from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { useTranslation } from 'react-i18next';
import './Dropdown.css';
import { useDispatch } from 'react-redux';
import { card, list } from '../../../slices/panelViewSlice';

export const DropdownElement = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button aria-label="Customise options">{t('view')}</button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className="DropdownMenuContent" sideOffset={5}>
          <DropdownMenu.Item
            className="DropdownMenuItem"
            onClick={() => {
              dispatch(list());
            }}>
            {t('list')}
          </DropdownMenu.Item>
          <DropdownMenu.Item
            className="DropdownMenuItem"
            onClick={() => {
              dispatch(card());
            }}>
            {t('tiles')}
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};
