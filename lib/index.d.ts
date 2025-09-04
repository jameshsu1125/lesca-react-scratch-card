import { ReactNode } from 'react';
type ScratchProps = {
    cover: string;
    percent?: number;
    width?: number;
    height?: number;
    children: ReactNode;
    onComplete?: Function;
    brushSize?: {
        width: number;
        height: number;
    };
    offset?: {
        x: number;
        y: number;
    };
};
declare const ScratchCard: ({ children, cover, onComplete, percent, width, height, brushSize, offset, }: ScratchProps) => import("react/jsx-runtime").JSX.Element;
export default ScratchCard;
