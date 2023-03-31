import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const FakeMenu = styled.div`
  width: 250px;
  height: 100%;

  @media screen and (max-width: 480px) {
    display: none;
  }
`;

export const ButtonWrapper = styled.button`
  background-color: black;
  color: white;
  height: 30px;
  width: 60px;
  position: fixed;
  border-end-end-radius: 5px;
  text-align: left;
  padding: 0 24px;
  opacity: 0.9;
`;

export const LinkWrapper = styled(Link)`
  &:hover {
    cursor: pointer;
  }
`;

export const CountryLabelWrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;
