import { currentUser } from '@clerk/nextjs/server';
import SignInButton from '../components/SignInButton';
import { UserButton } from '@clerk/nextjs';
import Link from 'next/link';
export default async function Header() {
    const user = await currentUser();
    return (
        <header className="bg-white sticky top-0 z-50">
            <div className="flex gap-3 border-b py-2 pl-2 pr-4 md:pl-3.5 md:pr-5 justify-between items-center overflow-x-auto">
                <div className="flex items-center gap-1">
                    <Link href="/">
                        <h1 className="font-bold mr-10">BBQ WEB</h1>
                    </Link>
                    <nav className="flex gap-3">
                        <Link href="/materials">学习资料</Link>
                        <Link href="/exam">试题</Link>
                    </nav>
                </div>
                <div className="flex items-center gap-3.5">
                    {user ? <UserButton /> : <SignInButton />}
                </div>
            </div>
        </header>
    );
}
