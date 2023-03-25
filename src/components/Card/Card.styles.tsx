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
  width: 350px;
`;

export const TitleWrapper = styled.div`
  font-size: 23px;
  font-weight: 600;
  color: black;
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
  width: 350px;
  height: 200px;
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

export const LinkInfoWrapper = styled.a`
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
  grid-template-columns: auto 200px 100px;
  gap: 15px;
  align-items: baseline;

  width: 100%;

  h4 {
    text-align: left;
    display: grid;
    font-weight: 500;
    font-size: 18px;
  }

  p {
    text-align: right;
    display: grid;
    font-size: 14px;
    font-weight: 400;
  }
`;
