/*
  Project: Prathamone Publications
  Author: Jawahar R. Mallah
  File: app/api/newsletter/route.js
  Description: Server route to receive newsletter signups.
*/
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    console.log('NEWSLETTER SIGNUP:', body.email);
    return NextResponse.json({ success: true, message: 'Subscribed' });
  } catch (e) {
    console.error('Newsletter route error', e);
    return NextResponse.json({ success: false, message: 'Error' }, { status: 500 });
  }
}
