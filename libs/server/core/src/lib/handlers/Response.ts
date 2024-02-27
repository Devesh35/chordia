import { log } from '../base/logger';
import { Response, RouteData, StatusCode } from '../types';

export const response = (
  res: Response,
  status: StatusCode = 500,
  message: string,
  data?: RouteData,
  serverData?: RouteData,
) => {
  log(res._id, { status, message, data, serverData });
  if (!res) return log('No Response Object');
  if (res.responseSent)
    return log(
      'Request Response Error: Response already sent to this request',
      { status, message, data },
    );
  res.status(status).send({ status, message, data });
  res.responseSent = true;
};

export const resp =
  (res: Response) =>
  (
    status: StatusCode,
    message: string,
    data?: RouteData,
    serverData?: RouteData,
  ) =>
    response(res, status, message, data, serverData);
