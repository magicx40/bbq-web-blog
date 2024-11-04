'use client';
import { SignInButton as SignInBtn } from '@clerk/clerk-react';
import { SignedOut } from '@clerk/nextjs';
export default function SignInButton() {
    return (
        <div>
            <SignedOut>
                <SignInBtn />
            </SignedOut>
        </div>
    );
}
