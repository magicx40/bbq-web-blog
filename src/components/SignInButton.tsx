'use client';
import { useClerk } from '@clerk/clerk-react';
import { SignedOut } from '@clerk/nextjs';
export default function SignInButton() {
    const { openSignIn } = useClerk();

    const handleSignIn = () => {
        openSignIn();
      };
    return (
        <div>
            <SignedOut>
                <button className='text-sm hover:underline hover:text-blue-400' onClick={handleSignIn}>登录</button>
            </SignedOut>
        </div>
    );
}
