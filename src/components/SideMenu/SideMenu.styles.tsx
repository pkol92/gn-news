import styled from 'styled-components';

export const FakeMenu = styled.div`
  width: 150px;
  height: 100%;

  @media screen and (max-width: 480px) {
    display: none;
  }
`;

export const ButtonWrapper = styled.button`
  background-color: black;
  color: white;
  height: 30px;
  width: 50px;
  position: fixed;
  border-end-end-radius: 5px;
  text-align: left;
  padding-left: 12px;
  opacity: 0.9;
`;
