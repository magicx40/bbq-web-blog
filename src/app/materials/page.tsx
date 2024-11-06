import Alink from '@/components/Alink';
import H from '@/components/H';
import Link from 'next/link';

export default function Materials() {
    return (
        <section>
            <H>公务员系列</H>
            <Alink href="/materials/gwcw" underline>
                2025行政职业能力测验
            </Alink>
        </section>
    );
}
