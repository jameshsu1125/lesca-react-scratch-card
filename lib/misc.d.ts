type Point = {
    x: number;
    y: number;
};
export declare const drawImage: (canvas: HTMLCanvasElement, image: HTMLImageElement, width: number, height: number) => void;
export declare const getMouse: (event: MouseEvent | TouchEvent, canvas: HTMLCanvasElement) => {
    x: number;
    y: number;
};
export declare const distanceBetween: (point1: Point, point2: Point) => number;
export declare const angleBetween: (point1: Point, point2: Point) => number;
export declare const getFilledInPixels: (stride: number, canvas: HTMLCanvasElement, width: number, height: number) => number | undefined;
export {};
