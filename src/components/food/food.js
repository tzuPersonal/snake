/* eslint-disable consistent-return */
import { BaseSize, snakes, maps } from '../store';

export const foodData = {};

export default function createFood(root) {
  if (!root) { return; }

  // eslint-disable-next-line max-len
  const createPositions = maps.filter((map) => !snakes.value.find((snake) => (map.x === snake.x && map.y === snake.y)));
  const { length } = createPositions;

  foodData.x = createPositions[Math.floor(Math.random() * length)].x;
  foodData.y = createPositions[Math.floor(Math.random() * length)].y;
  foodData.type = 'food';

  const food = document.createElement('div');

  food.classList.add('food');
  food.style.cssText = `
    position: absolute;
    left: 0;
    top: 0;
    width: ${BaseSize.width}px;
    height: ${BaseSize.height}px;
    transform: translate(${foodData.x}px, ${foodData.y}px);
    background-color: green;
  `;
  root.appendChild(food);
}

export function eat(snake) {
  if (
    snake.x === foodData.x
    && snake.y === foodData.y) {
    return {
      x: foodData.x,
      y: foodData.y,
    };
  }

  return false;
}
