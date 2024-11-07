interface ChapterProps {
    title: string;
}
export default function Chapter({ title }: ChapterProps) {
    return (
        <section>
            <h3>{title}</h3>
        </section>
    );
}
