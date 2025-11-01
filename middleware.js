// middleware.js - Basic Auth pour Vercel/Next.js (optionnel)
import { NextResponse } from 'next/server';

export function middleware(req) {
  const USER = 'jefe';
  const PASS = 'monMotDePasseSecret2025';
  const auth = req.headers.get('authorization');
  if (!auth) {
    return new Response('Auth required', {
      status: 401,
      headers: { 'WWW-Authenticate': 'Basic realm="JEFE IPTV 29"' }
    });
  }
  const [, encoded] = auth.split(' ');
  const decoded = Buffer.from(encoded || '', 'base64').toString();
  const [u, p] = decoded.split(':');
  if (u === USER && p === PASS) return NextResponse.next();
  return new Response('Access denied', { status: 403 });
}
