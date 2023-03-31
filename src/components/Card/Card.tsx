import React, { FC } from 'react';
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
import { useTranslation } from 'react-i18next';

interface CardProps {
  article: Article;
  isCard: boolean;
}

export const Card: FC<CardProps> = ({ article, isCard }) => {
  const { t } = useTranslation();
  const { title, description, author, url, content, publishedAt, source, urlToImage } = article;

  const cardView = (
    <CardWrapper>
      {urlToImage && <ImgWrapper src={urlToImage} alt={title} />}
      <TitleWrapper>{title}</TitleWrapper>
      <InfoWrapper>
        <SourceWrapper>{source.name.toUpperCase()}</SourceWrapper>
        <DateWrapper>{format(parseISO(publishedAt), 'dd/LL/yyyy')}</DateWrapper>
      </InfoWrapper>

      <DescriptionWrapper>{description}</DescriptionWrapper>
    </CardWrapper>
  );

  const listView = (
    <ListWrapper>
      <h4>{title}</h4>
      <div>
        <p>{source.name.toUpperCase()}</p>
        <p>{format(parseISO(publishedAt), 'dd/MM/yyyy')}</p>
      </div>
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
          {t('modalInfo')}
          <LinkWrapper href={`${url}`} target="_blank">
            {t('link')}
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
