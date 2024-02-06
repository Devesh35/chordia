import express from 'express';
import { Handler, Methods, Server } from '../types';
import { log } from './logger';
import { areExpressHandlers } from '../typeGaurds';
import { responseRoute } from '../handlers';

export class ServerBuilder {
  _id: string;
  server: Server;

  constructor(server?: Server) {
    this._id = `${+new Date()}`;
    this.server = server || express();
  }

  usePlugin(...plugin: Handler[]) {
    if (areExpressHandlers(plugin)) this.server.use(plugin);
    return this;
  }

  addRoute(method: Methods, route: string, ...handlers: Handler[]) {
    if (areExpressHandlers(handlers)) this.server[method](route, ...handlers);
    return this;
  }

  bodyParser() {
    return this.usePlugin(express.json({ limit: '50mb' })).usePlugin(
      express.urlencoded({ limit: '50mb', extended: true }),
    );
  }

  useId() {
    return this.usePlugin(ExpressPlugins.useID(this._id));
  }

  logRequest() {
    return this.usePlugin(ExpressPlugins.logRequest);
  }

  healthCheck() {
    return this.addRoute(
      'get',
      '/health',
      responseRoute(200, 'Server is running'),
    );
  }

  notFound() {
    return this.usePlugin(ExpressPlugins.resourceNotFound);
  }

  callWithServer(fn: (server: Server) => void) {
    fn(this.server);
    return this;
  }

  buildServer() {
    return this.server;
  }

  initialize() {
    return this.bodyParser().useId().logRequest().healthCheck();
  }

  buildAndListen(SERVER_PORT: number, cb = () => {}) {
    this.buildServer().listen(SERVER_PORT, (...args) => {
      log(`Server is running on port:${SERVER_PORT}.`);
      cb(...args);
    });
    return this.server;
  }
}

class ExpressPlugins {
  // logging the requests
  static logRequest: Handler = (req, _, next) => {
    log(
      `${req._id} ${req.method}:${req.path} | query:${JSON.stringify(
        req.query,
      )} | body:${JSON.stringify(req.body)}`,
    );
    next();
  };

  // resource not found
  static resourceNotFound = responseRoute(
    404,
    'Unable to find the requested resource',
  );

  static useID =
    (id: string): Handler =>
    (req, res, next) => {
      req._id = id;
      res._id = id;
      next();
    };

  //   // extract file from request and add to req.files
  //   static formidableMiddleware = syncHandler(async (req, res, next) => {
  //     if (Boolean(req.headers["x-file"]) != true) return next();
  //     if (req.express_formidable && req.express_formidable.parsed) return next();

  //     const form = new formidable.IncomingForm();
  //     Object.assign(form, fileOptions);

  //     const dir = fileOptions.uploadDir;
  //     if (!fs.existsSync(dir)) fs.mkdirSync(dir);

  //     form.parse(req, (err, fields, files) => {
  //       if (err) throw err;
  //       Object.assign(req, {
  //         fields,
  //         files,
  //         express_formidable: { parsed: true },
  //       });
  //       console.log(fields, files);
  //       next();
  //     });
  //   });
}
