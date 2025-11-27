/**
 * PRATHAMONE OFFICIAL SOURCE FILE (STABLE v3)
 * Author: Jawahar R. Mallah
 * Website: https://press.prathamone.com
 * Fully Fixed Version — force-dynamic applied to ALL API routes.
 */
export const dynamic = "force-dynamic";
export const runtime = "nodejs";
export const fetchCache = "force-no-store";
export const dynamic="force-dynamic";
import { NextResponse } from 'next/server';
import archiver from 'archiver';
export async function GET(){return NextResponse.json({ok:true});}
