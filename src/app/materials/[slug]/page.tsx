import QuestionItem from '@/components/QuestionItem';
import { questions } from '@/config/const';
export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    return (
        <div>
            {questions.map(q => (
                <QuestionItem key={q.id} q={q} />
            ))}
        </div>
    );
}
