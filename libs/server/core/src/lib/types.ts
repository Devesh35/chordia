import type { Express, RequestHandler } from 'express';

export type Server = Express;
export type ExpressHandler = RequestHandler;

type Params = Parameters<RequestHandler>;
type Return = ReturnType<RequestHandler>;
type ExpressRequest = Params[0];
type ExpressResponse = Params[1];
type ExpressNextFunc = Params[2];

export type Request = ExpressRequest & { _id: string };
export type Response = ExpressResponse & {
  _id: string;
  responseSent?: boolean;
};
export type NextFunc = ExpressNextFunc;
export type Handler = (req: Request, res: Response, next: NextFunc) => Return;

export type StatusCode = number;
export type RouteData = object;

export type Methods =
  | 'all'
  | 'get'
  | 'post'
  | 'put'
  | 'delete'
  | 'patch'
  | 'options'
  | 'head';
