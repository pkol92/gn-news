import { ButtonWrapper, CountryLabelWrapper, FakeMenu, LinkWrapper } from './SideMenu.styles';
import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar } from 'react-pro-sidebar';
import { useTranslation } from 'react-i18next';
import { useMemo } from 'react';
import { ReactComponent as PlFlag } from '../../icons/pl.svg';
import { ReactComponent as GbFlag } from '../../icons/gb.svg';
import { ReactComponent as DeFlag } from '../../icons/de.svg';
import { ReactComponent as UsFlag } from '../../icons/us.svg';

export const SideMenu = () => {
  const { toggleSidebar } = useProSidebar();
  const { t } = useTranslation();

  //sort alphabetic countries from translated file and add flag to each country
  const alphabeticList = useMemo(() => {
    const countries = t('countries', { returnObjects: true });
    return Object.entries(countries)
      .map(([key, value]) => {
        let flag;
        switch (key) {
          case 'pl':
            flag = <PlFlag width={20} height={10} />;
            break;
          case 'gb':
            flag = <GbFlag width={20} height={10} />;
            break;
          case 'de':
            flag = <DeFlag width={20} height={10} />;
            break;
          case 'us':
            flag = <UsFlag width={20} height={10} />;
            break;
          default:
            flag = null;
            break;
        }
        return { key, value, flag };
      })
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
        width="250px"
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
              <MenuItem
                key={country.key}
                component={<LinkWrapper to={`/country/${country.key}`} />}
                onClick={() => {
                  toggleSidebar(false);
                }}>
                <CountryLabelWrapper>
                  {country.flag}
                  {country.value}
                </CountryLabelWrapper>
              </MenuItem>
            ))}
          </SubMenu>
        </Menu>
      </Sidebar>
      <FakeMenu />
    </>
  );
};
