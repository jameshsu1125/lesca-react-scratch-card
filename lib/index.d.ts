import { ReactNode } from 'react';
type ScratchProps = {
    cover: string;
    percent: number;
    width: number;
    height: number;
    children: ReactNode;
    onComplete?: Function;
};
declare const ScratchCard: {
    ({ cover, percent, onComplete, width, height, children }: ScratchProps): import("react/jsx-runtime").JSX.Element;
    defaultProps: {
        percent: number;
        width: number;
        height: number;
    };
};
export default ScratchCard;
