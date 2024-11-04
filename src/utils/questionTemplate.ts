export function parseTemplate(
    template: string
): { type: string; value: string }[] {
    const result: { type: string; value: string }[] = [];
    const regex = /(\{\{(?:.|\r?\n)*?\}\})|([^{}]+)/g;
    let match;

    while ((match = regex.exec(template)) !== null) {
        if (match[1]) {
            // 匹配到 {{}}
            result.push({ type: 'math', value: match[1].slice(2, -2) });
        } else if (match[2]) {
            // 匹配到普通文本
            result.push({ type: 'text', value: match[2] });
        }
    }

    return result;
}
