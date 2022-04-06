<template>
  <div
    ref="map"
    class="map"
    :style="{
      'width': `${size.width * 20}px`,
      'height': `${size.height * 20}px`,
    }"
  >
    <div v-for="(col, index) in size.height" :key="index"
      class="col"
    >
      <div v-for="(row, index) in size.width" :key="index"
        :style="{
          'width': `${size.width}px`,
          'height': `${size.height}px`,
        }"
        class="grid"
      />
    </div>
    <Snake
      :map="map"
    />
  </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import { BaseSize as size } from '../store';
import createFood from '../food/food';
import Snake from '../Snake/Snake.vue';

export default {
  name: 'Map',
  components: {
    Snake,
  },
  setup() {
    const map = ref(null);

    onMounted(() => {
      createFood(map.value);
    });

    return {
      size,
      map,
    };
  },
};
</script>
<style lang="scss">
.map {
  position: relative;
  background-color: gray;

  .col {
    display: flex;
  }

  .grid {
    border: 1px solid black;
  }
}
</style>
