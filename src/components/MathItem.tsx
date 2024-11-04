'use client';
import katex from 'katex';
import { useEffect } from 'react';

interface MathItemProps {
    formula: string;
}
export default function MathItem({ formula }: MathItemProps) {
    useEffect(() => {
        const element = document.getElementById('math');
        if (element) {
            katex.render(formula, element, {
                throwOnError: false,
            });
        }
    }, [formula]);
    return <span id="math"></span>;
}
