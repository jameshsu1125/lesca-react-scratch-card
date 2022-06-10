type Point = {
  x: number;
  y: number;
};

export const drawImage = (canvas: HTMLCanvasElement, image: HTMLImageElement) => {
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  ctx.drawImage(image, 0, 0);
};

export const getMouse = (event: MouseEvent | TouchEvent, canvas: HTMLCanvasElement) => {
  const result = { x: 0, y: 0 };
  const offset = { x: 0, y: 0 };

  if (canvas.offsetParent !== undefined) {
    if (canvas.offsetParent instanceof HTMLElement) {
      do {
        offset.x += canvas.offsetLeft;
        offset.y += canvas.offsetTop;
      } while (((canvas as HTMLElement) = canvas.offsetParent));
    }
  }

  if (event instanceof TouchEvent) {
    result.x = event.touches[0].clientX - offset.x;
    result.y = event.touches[0].clientY - offset.y;
  } else {
    result.x = event.pageX - offset.x;
    result.y = event.pageY - offset.y;
  }

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
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  var pixels = ctx.getImageData(0, 0, width, height),
    pdata = pixels.data,
    l = pdata.length,
    total = l / stride,
    count = 0;

  for (var i = (count = 0); i < l; i += stride) {
    if (parseInt(String(pdata[i])) === 0) {
      count++;
    }
  }

  return Math.round((count / total) * 100);
};
