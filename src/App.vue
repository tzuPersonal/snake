<template>
<Map />
</template>

<script>
import Map from './components/Map/Map.vue';

export default {
  name: 'App',
  components: {
    Map,
  },
};
</script>

<style lang="scss">
*, ::after, ::before {
  box-sizing: border-box;
}
</style>
