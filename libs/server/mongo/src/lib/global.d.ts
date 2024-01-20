interface MongoClients {
  [key: string]: MongoClient;
}

declare module globalThis {
  // eslint-disable-next-line no-var
  var mongoClients: MongoClients;
}
