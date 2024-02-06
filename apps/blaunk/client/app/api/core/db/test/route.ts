import { NextResponse } from 'next/server';
import { TestModel } from './model';

export async function GET() {
  try {
    const data = await TestModel.find();
    return NextResponse.json(data, { status: 200 });
  } catch (e) {
    console.log('Error-TestGet: ' + e);
    if (e instanceof Error) return new Response(e.message, { status: 500 });
  }
}

export async function POST() {
  try {
    (await TestModel.create({ time: +new Date() })).save();

    return new Response('Dummy data created successfully', { status: 200 });
  } catch (e) {
    console.log('Error-TestPost: ' + e);
    if (e instanceof Error) return new Response(e.message, { status: 500 });
  }
}
