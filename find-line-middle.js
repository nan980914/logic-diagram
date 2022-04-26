const points = [
  [-60, -43],
  [-40, -43],
  [-22, -43],
  [-22, -188.5],
  [-5, -188.5],
  [15, -188.5],
];

const computedLength = (points) => {
  // 计算点的长度
  let length = 0;
  for (let i = 0; i < points.length - 1; i++) {
    const x = Math.abs(points[i][0] - points[i + 1][0]);
    const y = Math.abs(points[i][1] - points[i + 1][1]);
    length += x + y;
  }
  return length;
};

const findMiddle = (target, points) => {
  // 找到中间点
  let length = 0;
  for (let i = 0; i < points.length - 1; i++) {
    const x = Math.abs(points[i][0] - points[i + 1][0]);
    const y = Math.abs(points[i][1] - points[i + 1][1]);
    length += x + y;
    if (length > target) {
      console.log(i, points[i][0], points[i + 1][0], "=====比较");
      // 判断是x轴还是y轴一样
      const lastLength = target - (length - x - y);
      if (points[i][0] === points[i + 1][0]) {
        // x轴一样
        // y轴的值，应该要目标值减去 上一次长度的值
        if (points[i][1] > points[i + 1][1]) {
          // 向上
          return [points[i][0], points[i][1] - lastLength];
        } else {
          // 向下
          return [points[i][0], points[i][1] + lastLength];
        }
      } else {
        // y轴一样
        if (points[i][0] > points[i + 1][0]) {
          // 向右
          return [points[i][0] - lastLength, points[i][1]];
        } else {
          // 向左
          return [points[i][0] + lastLength, points[i][1]];
        }
      }
    }
  }
};

const computedMiddle = () => {
  const length = computedLength(points);
  const middle = length / 2;
  console.log(findMiddle(middle, points));
};

computedMiddle();
