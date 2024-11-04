import Link from 'next/link';
import SignInButton from '../components/SignInButton';
import { UserButton } from '@clerk/nextjs';
import { currentUser } from '@clerk/nextjs/server';
import QuestionItem from '@/components/QuestionItem';
import { questions } from '@/config/const';

export default async function Home() {
    const user = await currentUser();
    return (
        <div>
            <header className="bg-white sticky top-0">
                <div className="flex gap-3 border-b py-2 pl-2 pr-4 md:pl-3.5 md:pr-5 justify-between items-center overflow-x-auto">
                    <div className="flex items-center gap-1">
                        <h1 className="font-bold mr-10">BBQ WEB</h1>
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
            <main className="mx-auto max-w-[1080px] min-h-[600px] bg-white border-x border-b py-4 px-2">
                {questions.map(question => {
                    return <QuestionItem key={question.id} q={question} />;
                })}
            </main>
        </div>
    );
}
