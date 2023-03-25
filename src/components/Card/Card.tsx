import React, { FC, ReactNode } from 'react';
import { Article } from '../../api/getNews';
import { Modal } from '../Header/Modal/Modal';
import {
  CardWrapper,
  DateWrapper,
  DescriptionWrapper,
  ImgWrapper,
  InfoWrapper,
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
      <p>{content}</p>
      <p>{author}</p>
      <a href={`${url}`}>link</a>
    </Dialog.Description>
  );

  return (
    <>
      <Modal trigger={trigger} content={modalContent} />
    </>
  );
};
