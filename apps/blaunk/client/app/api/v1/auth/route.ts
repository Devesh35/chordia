// import getClient from '../../../_test/client';
import { MongoDB } from '@li/server/mongo';

const mongo_uri = process.env.MONGODB_URI_BLAUNK;
console.log('+++++++++++++++++++++++++++++');
// const m =

export async function GET(request: Request) {
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  console.log('=========');
  await MongoDB({ dbKey: 'blaunk', uri: mongo_uri });
  console.log('MongoDB');

  return new Response('Blaunk the API:V1!');
}
