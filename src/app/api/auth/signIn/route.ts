import { NextResponse } from 'next/server';
export async function GET() {
    try {
        const client_id = process.env.GITHUB_CLIENT_ID;
        const redirectUri = `${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/callback/github`;
        const githubOAuthUrl = `https://github.com/login/oauth/authorize?client_id=${client_id}&redirect_uri=${encodeURIComponent(
            redirectUri
        )}&scope=read:user`;
        return NextResponse.redirect(githubOAuthUrl);
    } catch (err) {
        return NextResponse.json(
            { error: 'Failed to fetch data' },
            { status: 500 }
        );
    }
}
