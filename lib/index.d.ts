import { ReactNode } from 'react';
declare type ScratchProps = {
    cover: string;
    percent: number;
    width: number;
    height: number;
    children: ReactNode;
    onComplete?: Function;
};
declare const ScratchCard: {
    ({ cover, percent, onComplete, width, height, children }: ScratchProps): JSX.Element;
    defaultProps: {
        percent: number;
    };
};
export default ScratchCard;
