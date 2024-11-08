'use client';

const githubOAuth = async () => {};

export default function SignInButton() {
    const handleClick = () =>
        fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/signIn`);
    return (
        <div className="flex justify-center items-center">
            <button onClick={handleClick}>登录</button>
        </div>
    );
}
