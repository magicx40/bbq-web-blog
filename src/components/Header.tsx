import Link from 'next/link';
import Alink from './Alink';
import SignInButton from './SignInButton';

export default async function Header() {
    return (
        <header className="bg-white sticky top-0 z-50">
            <div className="flex gap-3 border-b py-2 pl-2 pr-4 md:pl-3.5 md:pr-5 justify-between items-center overflow-x-auto">
                <div className="flex items-center gap-1">
                    <Link href="/">
                        <h1 className="font-bold mr-10">BBQ WEB</h1>
                    </Link>
                    <nav className="flex gap-3">
                        <Alink href="/materials">学习资料</Alink>
                        <Alink href="/exam">试题</Alink>
                    </nav>
                </div>
                <div>
                    <SignInButton />
                </div>
            </div>
        </header>
    );
}
