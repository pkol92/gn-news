import styled from 'styled-components';

export const InfoWrapper = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  width: 100%;
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;
  padding-bottom: 20px;
  width: 100%;
  max-width: 300px;
  box-sizing: border-box;
`;

export const TitleWrapper = styled.div`
  font-size: 23px;
  font-weight: 600;
  color: navy;
  text-align: left;
`;

export const SourceWrapper = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: black;
  text-align: left;
`;

export const DateWrapper = styled.div`
  font-size: 10px;
  font-weight: 300;
  text-align: right;
`;

export const ImgWrapper = styled.img`
  width: 100%;
  height: auto;
  overflow: hidden;
`;

export const DescriptionWrapper = styled.div`
  font-size: 14px;
  font-weight: 400;
  text-align: justify;
`;

export const LinkWrapper = styled.a`
  text-decoration: none;
  font-size: 14px;
  color: #726767;
  font-weight: 500;
  :hover {
    color: black;
  }
`;

export const LinkInfoWrapper = styled.div`
  font-size: 14px;
  display: flex;
  flex-direction: row;
  gap: 5px;
`;

export const ContentWrapper = styled.div`
  font-size: 16px;
  font-weight: 400;
  text-align: justify;
  letter-spacing: 0.5;
  line-height: 1.5;
`;

export const ModalContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ListWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 300px;
  gap: 15px;
  align-items: baseline;
  width: 100%;

  h4 {
    text-align: left;
    display: grid;
    font-weight: 500;
    font-size: 18px;
    margin: 0;
    color: navy;
  }

  p {
    text-align: right;
    display: grid;
    font-size: 14px;
    font-weight: 400;
  }

  div {
    display: grid;
    gap: 15px;
    grid-template-columns: 2fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
    justify-items: stretch;
    gap: 5px;
    align-items: baseline;

    p {
      font-size: 12px;
    }

    div p:first-child {
      text-align: left;
    }

    div p:last-child {
      font-size: 10px;
    }
  }
`;
