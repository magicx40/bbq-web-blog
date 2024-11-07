import QuestionItem from '@/components/QuestionItem';
import { questions } from '@/data/q';
export default async function Page({}: { params: Promise<{ slug: string }> }) {
    return (
        <div>
            {questions.map(q => (
                <QuestionItem key={q.id} q={q} />
            ))}
        </div>
    );
}
