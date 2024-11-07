export const MATH_TYPE = 'math';
export interface TextToken {
    type: string;
    value: string;
}
export enum DT {
    Text = 1,
    Question = 2,
    Reference = 3,
}
