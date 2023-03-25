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
  ListWrapper,
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

export const Card: FC<CardProps> = ({ article, isCard = false }) => {
  const { title, description, author, url, content, publishedAt, source, urlToImage } = article;

  const cardView = (
    <CardWrapper>
      {urlToImage && <ImgWrapper src={urlToImage} alt={title} />}
      <TitleWrapper>{title}</TitleWrapper>
      <InfoWrapper>
        <SourceWrapper>{source.name.toUpperCase()}</SourceWrapper>
        <DateWrapper>{format(parseISO(publishedAt), 'dd/MM/yyyy')}</DateWrapper>
      </InfoWrapper>

      <DescriptionWrapper>{description}</DescriptionWrapper>
    </CardWrapper>
  );

  const listView = (
    <ListWrapper>
      <h4>{title}</h4>
      <p>{source.name.toUpperCase()}</p>
      <p>{format(parseISO(publishedAt), 'dd/MM/yyyy')}</p>
    </ListWrapper>
  );

  const trigger = isCard ? cardView : listView;

  const modalContent = (
    <Dialog.Description>
      <ModalContentWrapper>
        {content && (
          <ContentWrapper
            dangerouslySetInnerHTML={{ __html: content?.slice(0, content.indexOf('[')) }}
          />
        )}

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
