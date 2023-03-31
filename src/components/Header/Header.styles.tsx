import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  background: black;
  color: white;
  padding: 24px;
  justify-content: space-between;
  align-items: baseline;
  position: fixed;
  width: 100%;
  box-sizing: border-box;
  margin: auto;
  height: 80px;
`;

export const FakeHeaderWrapper = styled.div`
  height: 80px;
  width: 100%;
  box-sizing: border-box;
`;

export const LogoWrapper = styled(Link)`
  font-size: 27px;
  font-weight: 400;
  text-decoration: none;
  color: white;
`;
