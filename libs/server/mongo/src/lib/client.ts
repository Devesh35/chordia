import { MongoClient, MongoClientOptions } from 'mongodb';

interface MongoConfig {
  dbKey: string;
  uri?: string;
  options?: MongoClientOptions;
}
interface MongoClients {
  [key: string]: MongoClient;
}

declare const global: {
  mongoClients: MongoClients;
};

async function getClient(config: MongoConfig): Promise<MongoClient> {
  const { dbKey, uri, options } = config;
  if (!global.mongoClients) global.mongoClients = {};
  if (!global.mongoClients[dbKey]) {
    if (!uri) throw 'Connection string is required, when connecting new db';
    console.log('Connecting new mongo client for: ', dbKey);
    const client = new MongoClient(uri, options);
    await client.connect();
    global.mongoClients[dbKey] = client;
  }

  return global.mongoClients[dbKey];
}

export default getClient;
