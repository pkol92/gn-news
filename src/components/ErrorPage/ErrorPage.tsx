import React from 'react';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';
import { ErrorWrapper } from './ErrorPage.style';
import { useTranslation } from 'react-i18next';

export const ErrorPage = () => {
  const error = useRouteError();
  const { t } = useTranslation();

  if (isRouteErrorResponse(error)) {
    return (
      <ErrorWrapper>
        {error.status} {error.statusText}
      </ErrorWrapper>
    );
  }

  return (
    <ErrorWrapper>
      <h1>{t('errorHeader')}</h1>
      <p>{t('unexpectedError')}</p>
    </ErrorWrapper>
  );
};
