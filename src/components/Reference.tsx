import { MATH_TYPE, TextToken } from '@/config/const';
import { parseTemplate } from '@/utils/questionTemplate';
import MathItem from './MathItem';

interface ReferenceProps {
    title: string;
    paragraphs: string[];
}
export default function Reference({ title, paragraphs }: ReferenceProps) {
    const parsedParagraphs: TextToken[][] = paragraphs?.map(item =>
        parseTemplate(item)
    );
    return (
        <section className="border-red-600 border-[1px] max-w-[80%] m-auto p-3 rounded-lg relative min-h-[40px]">
            <h4 className="absolute left-1/2 -top-4 -translate-x-1/2 inline-block py-[2px] px-[8px] rounded-lg bg-red-600 text-white">
                {title}
            </h4>
            {parsedParagraphs.map((text, idx) => {
                return (
                    <p className="indent-8 text-sm" key={idx}>
                        {text.map((item, index) => {
                            if (item.type === MATH_TYPE) {
                                return (
                                    <MathItem
                                        key={index}
                                        formula={item.value}
                                    />
                                );
                            } else {
                                return <span key={index}>{item.value}</span>;
                            }
                        })}
                    </p>
                );
            })}
        </section>
    );
}
