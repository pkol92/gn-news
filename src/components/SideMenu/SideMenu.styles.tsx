import styled from 'styled-components';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

export const FakeMenu = styled.div`
  width: 150px;
  height: 100%;

  @media screen and (max-width: 480px) {
    display: none;
  }
`;

export const SideBarWrapper = styled(Sidebar)`
  position: fixed;
  color: white;
  position: fixed;
  text-align: left;
  width: 150px;
  background-color: black;
`;

export const ButtonWrapper = styled.button`
  background-color: black;
  color: white;
  height: 30px;
  width: 100px;
  position: fixed;
  border-end-end-radius: 5px;
`;
