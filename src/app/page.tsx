import Link from 'next/link';

export default async function Home() {
    return (
        <div>
            <main className="mx-auto max-w-[1080px] min-h-[600px] bg-white border-x border-b py-4 px-2">
                <h2 className="text-center font-bold">资源</h2>
                <section className="">
                    <Link
                        className="text-blue-600 underline"
                        href={'/materials'}
                    >
                        学习资料
                    </Link>
                </section>
            </main>
        </div>
    );
}
