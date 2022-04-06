<template>
  <div v-for="(snake, index) in snakes" :key="index"
    :ref="getSnake"
    class="snake"
    :style="{
      'width': `${snake.width}px`,
      'height': `${snake.height}px`,
      'transform': `translate(${snake.x}px, ${snake.y}px)`
    }"
  />
</template>

<script>
// import { ref。 } from 'vue';
import { BaseSize, snakes } from '../store';
import move from './move';

export default {
  name: 'Snake',
  props: ['map'],
  setup(props) {
    const snakeItems = [];
    const getSnake = (el) => {
      snakeItems.push(el);
    };
    let lastDirection = null;
    let direction = null;
    function keydown() {
      window.addEventListener('keydown', (e) => {
        if (
          e.key !== 'ArrowUp'
          && e.key !== 'ArrowDown'
          && e.key !== 'ArrowLeft'
          && e.key !== 'ArrowRight') {
          return;
        }
        if (
          (lastDirection === 'ArrowUp' || lastDirection === 'ArrowDown')
          && (e.key === 'ArrowUp' || e.key === 'ArrowDown')
        ) { return; }
        if (
          (lastDirection === 'ArrowLeft' || lastDirection === 'ArrowRight')
          && (e.key === 'ArrowLeft' || e.key === 'ArrowRight')
        ) { return; }
        direction = e.key;
      });
    }

    keydown();

    function main() {
      window.setTimeout(() => {
        lastDirection = move(snakeItems[0], direction, props.map);
        main();
      }, 100);
    }

    main();

    return {
      getSnake,
      BaseSize,
      snakes,
    };
  },
};
</script>

<style lang="scss">
.snake {
  position: absolute;
  left: 0;
  top: 0;
  background-color: red;
  z-index: 10;
  will-change: transform;
}
</style>
