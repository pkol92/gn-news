import styled from 'styled-components';

export const CardWrapper = styled.div`
  display: flex;
  width: 350px;
  flex-direction: column;

  align-items: flex-start;
  gap: 10px;
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

export const InfoWrapper = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  width: 100%;
`;
