import { parseTemplate } from '@/utils/questionTemplate';
import MathItem from './MathItem';
import ToggleExplanation from './ToggleExplanation';
import { MATH_TYPE, TextToken } from '@/config/const';

interface QuestionItemProps {
    q: {
        id: number;
        title: string;
        question: string;
        answer: {
            id: string;
            text: string;
        }[];
        explanation: string[];
    };
}

export default function QuestionItem({ q }: QuestionItemProps) {
    const parsedQuestionText: TextToken[] = parseTemplate(q.question);
    const parsedExplanationText: TextToken[][] = q?.explanation?.map(item =>
        parseTemplate(item)
    );
    return (
        <div className="mb-2">
            {q.title ? (
                <div className="title-part text-red-500">{q.title}</div>
            ) : null}
            <div className="question-part mt-2 font-bold indent-8">
                {parsedQuestionText.map((item, index) => {
                    if (item.type === MATH_TYPE) {
                        return <MathItem key={index} formula={item.value} />;
                    } else {
                        return <span key={index}>{item.value}</span>;
                    }
                })}
            </div>
            <div className="answer-part mt-2 font-bold">
                {q.answer.map(item => (
                    <p className="mr-4 cursor-pointer" key={item.id}>
                        {item.text}
                    </p>
                ))}
            </div>
            <ToggleExplanation explanation={parsedExplanationText} />
        </div>
    );
}
