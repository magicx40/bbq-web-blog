'use client';
import katex from 'katex';
import { useEffect, useRef } from 'react';

interface MathItemProps {
    formula: string;
}
export default function MathItem({ formula }: MathItemProps) {
    const katexRef = useRef<HTMLSpanElement>(null);
    useEffect(() => {
        if (katexRef.current) {
            katex.render(formula, katexRef.current, {
                throwOnError: false,
            });
        }
    }, [formula]);
    return <span ref={katexRef}></span>;
}
