import { ExpressHandler, Handler } from './types';

export const areExpressHandlers = (h: Handler[]): h is ExpressHandler[] => true;
