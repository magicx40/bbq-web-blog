import { parseTemplate } from '@/utils/questionTemplate';
import MathItem from './MathItem';

interface QuestionText {
    type: string;
    value: string;
}

interface QuestionItemProps {
    q: {
        id: number;
        question: string;
        answer: {
            id: string;
            text: string;
        }[];
    };
}

const MATH_TYPE = 'math';
export default function QuestionItem({ q }: QuestionItemProps) {
    const parsedQuestionText: QuestionText[] = parseTemplate(q.question);
    console.log(parsedQuestionText);
    return (
        <div>
            <div className="question-part">
                <span>{q.id}：</span>
                {parsedQuestionText.map((item, index) => {
                    if (item.type === MATH_TYPE) {
                        return <MathItem key={index} formula={item.value} />;
                    } else {
                        return <span key={index}>{item.value}</span>;
                    }
                })}
            </div>
            <div className="answer-part mt-2">
                {q.answer.map(item => (
                    <span className="mr-4" key={item.id}>
                        {item.text}
                    </span>
                ))}
            </div>
        </div>
    );
}
