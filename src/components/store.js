import { ref } from 'vue';

export const BaseSize = {
  width: 20,
  height: 20,
};
export const maps = [];

const createMap = () => {
  for (let i = 0; i < BaseSize.height; i += 1) {
    for (let j = 0; j < BaseSize.width; j += 1) {
      maps.push(
        {
          x: j * BaseSize.width,
          y: i * BaseSize.height,
        },
      );
    }
  }
};
createMap();
const InitPosition = {
  x: BaseSize.width * Math.floor(Math.random() * BaseSize.width),
  y: BaseSize.height * Math.floor(Math.random() * BaseSize.height),
};

export const snakes = ref([{
  x: InitPosition.x,
  y: InitPosition.y,
  width: BaseSize.width,
  height: BaseSize.height,
}]);
export const time = 1;
