import Alink from '@/components/Alink';
import H from '@/components/H';
// 如果fetch不加域名的话，实际是使用的内部路由，不是发请求。
async function getData(): Promise<{ message: string }> {
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/auth`
    );
    return await response.json();
}

export default async function Materials() {
    const { message } = await getData();
    console.log('server api:', message);
    return (
        <section>
            <H>公务员系列</H>
            <Alink href="/materials/gwcw" underline>
                2025行政职业能力测验
            </Alink>
        </section>
    );
}
