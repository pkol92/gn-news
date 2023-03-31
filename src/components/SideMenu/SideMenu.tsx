import React, { useEffect, useState } from 'react';
import { ButtonWrapper, FakeMenu } from './SideMenu.styles';
import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar } from 'react-pro-sidebar';

export const SideMenu = () => {
  const { collapseSidebar, toggled, toggleSidebar, collapsed, broken } = useProSidebar();

  return (
    <>
      <ButtonWrapper onClick={() => toggleSidebar(true)}>Kraj</ButtonWrapper>
      <Sidebar
        style={{
          color: 'white',
          textAlign: 'left',
          position: 'fixed',
          height: '100%',
        }}
        breakPoint="sm"
        width="150px"
        backgroundColor="black">
        <Menu
          menuItemStyles={{
            subMenuContent: () => {
              return { color: 'white', backgroundColor: 'black' };
            },
            button: () => {
              return {
                backgroundColor: 'black',
                '&:hover': {
                  backgroundColor: 'black',
                },
              };
            },
          }}>
          <SubMenu label="Kraj" open={true}>
            <MenuItem> Polska </MenuItem>
            <MenuItem> US </MenuItem>
            <MenuItem> Anglia </MenuItem>
          </SubMenu>
        </Menu>
      </Sidebar>
      <FakeMenu />
    </>
  );
};
