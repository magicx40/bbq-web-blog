import Alink from '@/components/Alink';
import H from '@/components/H';
import Link from 'next/link';

export default async function Home() {
    return (
        <>
            <H>资源</H>
            <section>
                <Alink href="/materials" underline>
                    学习资料
                </Alink>
            </section>
        </>
    );
}
