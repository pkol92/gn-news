import { ButtonWrapper, FakeMenu } from './SideMenu.styles';
import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar } from 'react-pro-sidebar';

export const SideMenu = () => {
  const { toggleSidebar } = useProSidebar();

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
            SubMenuExpandIcon: () => {
              return { display: 'none' };
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
