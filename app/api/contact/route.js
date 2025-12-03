/*
  Project: Prathamone Publications
  Author: Jawahar R. Mallah
  File: app/api/contact/route.js
  Description: Server route to receive contact form submissions.
*/
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    console.log('CONTACT FORM SUBMISSION:', body);
    return NextResponse.json({ success: true, message: 'Message received' });
  } catch (e) {
    console.error('Contact route error', e);
    return NextResponse.json({ success: false, message: 'Error' }, { status: 500 });
  }
}
