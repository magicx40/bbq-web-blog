import Alink from '@/components/Alink';
import H from '@/components/H';
// 如果fetch不加域名的话，实际是使用的内部路由，不是发请求。
async function getData() {
    const response = await fetch(`${process.env.URL}/api/auth`);
    const result = await response.json();
    console.log('result', result);
}

export default function Materials() {
    getData();
    return (
        <section>
            <H>公务员系列</H>
            <Alink href="/materials/gwcw" underline>
                2025行政职业能力测验
            </Alink>
        </section>
    );
}
