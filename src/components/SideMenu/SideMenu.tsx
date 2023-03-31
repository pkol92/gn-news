import { ButtonWrapper, FakeMenu } from './SideMenu.styles';
import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar } from 'react-pro-sidebar';
import { countriesToPick } from './countriesToPick';

export const SideMenu = () => {
  const { toggleSidebar } = useProSidebar();

  // const handlePick = (code: string) => {
  //   dispatch(pickCountry(code));
  //   toggleSidebar(false);
  // };

  return (
    <>
      <ButtonWrapper onClick={() => toggleSidebar(true)}>Kraj</ButtonWrapper>
      <Sidebar
        style={{
          color: 'white',
          textAlign: 'left',
          position: 'fixed',
          height: '100%',
          border: 'none',
        }}
        breakPoint="sm"
        width="150px"
        backgroundColor="black">
        <Menu
          menuItemStyles={{
            subMenuContent: () => {
              return { color: 'white', backgroundColor: 'black', textDecoration: 'none' };
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
            {countriesToPick
              .sort((a, b) => (a.label.toLowerCase() < b.label.toLowerCase() ? 1 : -1))
              .map((country) => (
                <MenuItem key={country.code} href={`country/${country.code}`}>
                  {country.label}
                </MenuItem>
              ))}
          </SubMenu>
        </Menu>
      </Sidebar>
      <FakeMenu />
    </>
  );
};
