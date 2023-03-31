import { ButtonWrapper, FakeMenu } from './SideMenu.styles';
import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar } from 'react-pro-sidebar';
import { useTranslation } from 'react-i18next';

export const SideMenu = () => {
  const { toggleSidebar } = useProSidebar();
  const { t } = useTranslation();

  const countriesFromList = t('countries', { returnObjects: true });
  const alphabeticList = Object.entries(countriesFromList).sort(([, a], [, b]) => a - b);

  return (
    <>
      <ButtonWrapper onClick={() => toggleSidebar(true)}>{t('country')}</ButtonWrapper>
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
          <SubMenu label={t('country')} open={true}>
            {alphabeticList.map((country) => (
              <MenuItem key={country[0]} href={`/country/${country[0]}`}>
                {country[1]}
              </MenuItem>
            ))}
          </SubMenu>
        </Menu>
      </Sidebar>
      <FakeMenu />
    </>
  );
};
