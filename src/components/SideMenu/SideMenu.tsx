import { ButtonWrapper, FakeMenu } from './SideMenu.styles';
import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar } from 'react-pro-sidebar';
import { useTranslation } from 'react-i18next';
import { useMemo } from 'react';

export const SideMenu = () => {
  const { toggleSidebar } = useProSidebar();
  const { t } = useTranslation();

  const alphabeticList = useMemo(() => {
    const countries = t('countries', { returnObjects: true });
    return Object.entries(countries)
      .map(([key, value]) => ({ key, value }))
      .sort((a, b) => a.value.localeCompare(b.value));
  }, [t]);

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
              <MenuItem key={country.key} href={`/country/${country.key}`}>
                {country.value}
              </MenuItem>
            ))}
          </SubMenu>
        </Menu>
      </Sidebar>
      <FakeMenu />
    </>
  );
};
