import { err, log } from '../base/logger';
import { Handler, RouteData, StatusCode } from '../types';
import { response } from './Response';

export const nextRoute: Handler = (_, __, next) => next('route');

export const responseRoute =
  (
    status: StatusCode,
    message: string,
    data?: RouteData,
    serverData?: RouteData,
  ): Handler =>
  (_, res) => {
    if (!res) return log('No Response Object');
    try {
      if (res.locals.err) {
        const err = res.locals.err;
        return response(
          res,
          err.code || 400,
          err.message,
          err.data,
          err.serverData,
        );
      }
      return response(
        res,
        status,
        message || res.locals.message,
        { ...res.locals.data, ...data },
        serverData,
      );
    } catch (e) {
      if (e instanceof Error) {
        err(e);
        response(res, 500, e.message || 'An Error occurred');
      }
    }
  };
