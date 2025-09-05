type Point = {
  x: number;
  y: number;
};

export const drawImage = (
  canvas: HTMLCanvasElement,
  image: HTMLImageElement,
  width: number,
  height: number,
) => {
  const ctx = canvas.getContext('2d', { willReadFrequently: true });
  if (!ctx) return;
  ctx.drawImage(image, 0, 0, width, height);
};

export const getMouse = (event: PointerEvent, canvas: HTMLCanvasElement) => {
  const result = { x: 0, y: 0 };
  const offset = { x: 0, y: 0 };
  console.log(event);

  if (canvas.offsetParent !== undefined) {
    if (canvas.offsetParent instanceof HTMLElement) {
      do {
        offset.x += canvas.offsetLeft;
        offset.y += canvas.offsetTop;
      } while (((canvas as HTMLElement) = canvas.offsetParent));
    }
  }

  result.x = event.clientX - offset.x;
  result.y = event.clientY - offset.y;

  return result;
};

export const distanceBetween = (point1: Point, point2: Point) => {
  return Math.sqrt(Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2));
};

export const angleBetween = (point1: Point, point2: Point) => {
  return Math.atan2(point2.x - point1.x, point2.y - point1.y);
};

export const getFilledInPixels = (
  stride: number,
  canvas: HTMLCanvasElement,
  width: number,
  height: number,
) => {
  if (!stride || stride < 1) stride = 1;
  const ctx = canvas.getContext('2d', { willReadFrequently: true });
  if (!ctx) return;

  var pixels = ctx.getImageData(0, 0, width, height),
    data = pixels.data,
    l = data.length,
    total = l / stride,
    count = 0;

  for (var i = (count = 0); i < l; i += stride) {
    if (parseInt(String(data[i])) === 0) {
      count++;
    }
  }

  return Math.round((count / total) * 100);
};
