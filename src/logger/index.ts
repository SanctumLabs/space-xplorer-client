/* eslint-disable import/prefer-default-export */
import * as Sentry from '@sentry/react';
import { ErrorInfo } from 'react';
import { Scope } from '@sentry/react';
import { Integrations } from '@sentry/tracing';

const { NODE_ENV } = process.env;

/**
 * Initializes logger reporter service
 */
export const initializeLogger = (): void => {
  /* istanbul ignore next */
  // eslint-disable-next-line no-restricted-globals
  if (
    NODE_ENV === 'production' &&
    // eslint-disable-next-line no-restricted-globals
    (location.protocol === 'https' || location.protocol === 'https:')
  ) {
    Sentry.init({
      // eslint-disable-next-line no-underscore-dangle
      dsn: process.env.SENTRY_DSN || window._env_.SENTRY_DSN,
      integrations: [new Integrations.BrowserTracing()],
      tracesSampleRate: 1.0,
    });
  }
};

/**
 * capture and log any errors caught
 * @param error error in stacktrace
 * @param errorInfo Error information from React
 */
export const captureAndLogError = (error: Error, errorInfo: ErrorInfo): void => {
  Sentry.withScope((scope: Scope) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    scope.setExtras(errorInfo);
    Sentry.captureException(error);
  });
};
