import mongoose from 'mongoose';

const mongo_uri = process.env.MONGODB_URI_BLAUNK;

export async function GET() {
  try {
    if (mongo_uri) {
      await mongoose.connect(mongo_uri);
      return new Response('Connected to MongoDB', { status: 200 });
    }
    return new Response('No URI provided', { status: 400 });
  } catch (e) {
    if (e instanceof Error) return new Response(e.message, { status: 500 });
    console.log('Error-ConDB: ' + e);
  }
}
