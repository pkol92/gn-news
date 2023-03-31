import styled from 'styled-components';

export const CardsWrapper = styled.div<{ isCard: boolean }>`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  align-items: flex-start;
  justify-content: center;
  padding: 30px;
  box-sizing: border-box;

  button {
    width: ${({ isCard }) => (isCard ? 'auto' : '100%')};
    max-width: ${({ isCard }) => (isCard ? '100%' : '750px')};
  }
`;

export const InfoWrapper = styled.h2`
  font-size: 23px;
  font-weight: 600;
  padding-top: 20px;
`;
