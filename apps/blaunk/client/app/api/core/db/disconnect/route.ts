import mongoose from 'mongoose';

export async function GET() {
  try {
    await mongoose.disconnect();
    return new Response('Disconnected from MongoDB', { status: 200 });
  } catch (e) {
    if (e instanceof Error) return new Response(e.message, { status: 500 });
    console.log('Error-DisConDB: ' + e);
  }
}
