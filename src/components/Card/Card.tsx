import React, { FC, ReactNode } from 'react';
import { Modal } from '../Header/Modal/Modal';
import { TitleWrapper } from './Card.styles';

type Article = {
  title: string;
  sourceName: string;
  publicationDate: string;
  icon?: ReactNode;
  description: string;
  author: string;
  url: string;
};

interface CardProps {
  article: Article;
  isCard?: boolean;
}

export const Card: FC<CardProps> = ({ article, isCard = true }) => {
  const { title, sourceName, publicationDate, icon, description, author, url } = article;

  const trigger = (
    <div>
      {isCard && icon && icon}
      <TitleWrapper>{title}</TitleWrapper>
      <p>{sourceName}</p>
      <p>{publicationDate}</p>
      <p>zajawka?</p>
    </div>
  );

  const content = (
    <>
      {isCard && <p>{description}</p>}
      <p>{author}</p>
      <a href={`${url}`}>link</a>
    </>
  );

  return (
    <>
      <Modal trigger={trigger} content={content} />
    </>
  );
};
