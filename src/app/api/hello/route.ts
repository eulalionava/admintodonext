import { NextResponse, NextRequest } from 'next/server'

export async function GET(req: Request) {
 
    return NextResponse.json({ title :'Hola mundo' });
}

export async function POST(req: Request) {
 
    return NextResponse.json({ title :'Hola mundo' });
}