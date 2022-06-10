import { ReactNode } from 'react';
declare type ScratchProps = {
    cover: string;
    percent: number;
    children: ReactNode;
    onComplete?: Function;
};
declare const ScratchCard: {
    ({ cover, percent, onComplete, children }: ScratchProps): JSX.Element;
    defaultProps: {
        percent: number;
    };
};
export default ScratchCard;
