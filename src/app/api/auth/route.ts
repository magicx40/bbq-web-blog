import { NextRequest } from 'next/server';
export async function GET(request: NextRequest) {
    console.log('GET /api/auth', request);
    return new Response(JSON.stringify({ message: 'Hello, World!' }), {
        headers: {
            'Content-Type': 'application/json',
        },
    });
}
