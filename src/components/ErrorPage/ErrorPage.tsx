import React from 'react';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';
import { ErrorWrapper } from './ErrorPage.style';

export const ErrorPage = () => {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <ErrorWrapper>
        {error.status} {error.statusText}
      </ErrorWrapper>
    );
  }

  return (
    <ErrorWrapper>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>Unknown Error</i>
      </p>
    </ErrorWrapper>
  );
};
