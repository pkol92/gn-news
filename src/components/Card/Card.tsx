import React, { FC, ReactNode } from 'react';
import { Article } from '../../api/getNews';
import { Modal } from '../Header/Modal/Modal';
import {
  CardWrapper,
  ContentWrapper,
  DateWrapper,
  DescriptionWrapper,
  ImgWrapper,
  InfoWrapper,
  LinkInfoWrapper,
  LinkWrapper,
  ModalContentWrapper,
  SourceWrapper,
  TitleWrapper,
} from './Card.styles';
import * as Dialog from '@radix-ui/react-dialog';
import { format, parseISO } from 'date-fns';

interface CardProps {
  article: Article;
  isCard?: boolean;
}

export const Card: FC<CardProps> = ({ article, isCard = true }) => {
  const { title, description, author, url, content, publishedAt, source, urlToImage } = article;

  const trigger = (
    <CardWrapper>
      {isCard && urlToImage && <ImgWrapper src={urlToImage} alt={title} />}
      <TitleWrapper>{title}</TitleWrapper>
      <InfoWrapper>
        <SourceWrapper>{source.name.toUpperCase()}</SourceWrapper>
        <DateWrapper>{format(parseISO(publishedAt), 'dd/MM/yyyy')}</DateWrapper>
      </InfoWrapper>

      {isCard && <DescriptionWrapper>{description}</DescriptionWrapper>}
    </CardWrapper>
  );

  const modalContent = (
    <Dialog.Description>
      <ModalContentWrapper>
        <ContentWrapper>{content?.slice(0, content.indexOf('['))}</ContentWrapper>

        <LinkInfoWrapper>
          Żeby przeczytać pełny artykuł kliknij w
          <LinkWrapper href={`${url}`} target="_blank">
            link
          </LinkWrapper>
        </LinkInfoWrapper>
        <SourceWrapper>{author}</SourceWrapper>
      </ModalContentWrapper>
    </Dialog.Description>
  );

  return (
    <>
      <Modal trigger={trigger} content={modalContent} />
    </>
  );
};
