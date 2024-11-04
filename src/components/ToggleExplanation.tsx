'use client';

import { useState } from 'react';
import MathItem from './MathItem';
import { MATH_TYPE, TextToken } from './QuestionItem';

interface ToggleExplanationProps {
    explanation: TextToken[][];
}
export default function ToggleExplanation({
    explanation,
}: ToggleExplanationProps) {
    const [visible, setVisible] = useState(false);

    const toggleExpl = () => {
        setVisible(!visible);
    };

    return (
        <div>
            <span
                className="view-explanation underline text-blue-500 cursor-pointer text-xs"
                onClick={toggleExpl}
            >
                {visible ? '隐藏题解' : '显示题解'}
            </span>
            {visible && (
                <div className="explanation-part mt-2 text-xs">
                    <span>【 解析 】</span>
                    {explanation.map((text, idx) => {
                        return (
                            <p key={idx}>
                                {text.map((item, index) => {
                                    if (item.type === MATH_TYPE) {
                                        return (
                                            <MathItem
                                                key={index}
                                                formula={item.value}
                                            />
                                        );
                                    } else {
                                        return (
                                            <span key={index}>
                                                {item.value}
                                            </span>
                                        );
                                    }
                                })}
                            </p>
                        );
                    })}
                </div>
            )}
        </div>
    );
}
