/* eslint-disable no-param-reassign */
import createFood, { eat } from '../food/food';
import { snakes, BaseSize } from '../store';

// 移動到下一格前
// 先確認下一格有沒有食物
// 如果有，則直接在下一格生出新頭頭，然後move return
// 沒有則直接move

function collision() {
  if (
    (snakes.value[0].y < 0 || snakes.value[0].y > 380)
    || (snakes.value[0].x < 0 || snakes.value[0].x > 380)
  ) {
    return true;
  }

  const touchSanke = snakes.value.find((snake, index) => {
    if (
      snakes.value[0].x === snake.x
      && snakes.value[0].y === snake.y
      && index !== 0) {
      return true;
    }
    return false;
  });

  return touchSanke;
}

export default function move(target, direction, map) {
  if (!target) { return; }
  if (!direction) { return; }

  let dx = 0;
  let dy = 0;

  if (direction === 'ArrowUp') {
    dy -= BaseSize.height;
  }
  if (direction === 'ArrowDown') {
    dy += BaseSize.height;
  }
  if (direction === 'ArrowLeft') {
    dx -= BaseSize.width;
  }
  if (direction === 'ArrowRight') {
    dx += BaseSize.width;
  }

  const newHead = {
    width: BaseSize.width,
    height: BaseSize.height,
    x: snakes.value[0].x + dx,
    y: snakes.value[0].y + dy,
  };

  snakes.value.unshift(newHead);

  const isEat = eat(newHead);

  if (isEat) {
    document.querySelector('.food').remove();
    createFood(map);
  } else {
    snakes.value.pop();
  }

  if (collision()) {
    window.alert('collision');
  }

  // eslint-disable-next-line consistent-return
  return direction;
}
