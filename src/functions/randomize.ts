export default function* randomize(x: number, y: number) {
  const xArr: number[] = [];
  const yArr: number[] = [];

  for (let i = 0; i < x; i += 1) {
    xArr.push(i);
  }

  for (let i = 0; i < y; i += 1) {
    yArr.push(i);
  }

  while (true) {
    const xIdx = Math.floor(Math.random() * x);
    const yIdx = Math.floor(Math.random() * y);

    yield { x: xArr[xIdx], y: yArr[yIdx] };
  }
}

export function randomizeInitialLocation(x: number, y: number) {
  const initialX = Math.floor(Math.random() * x);
  const initialY = Math.floor(Math.random() * y);

  return [initialX, initialY];
}
