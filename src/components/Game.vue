<template>
  <canvas></canvas>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Game extends Vue {
  mounted() {
    this.init();
  }

  init(): void {
    const canvas = this.$el;

    canvas.width = this.$parent.$el.clientWidth;
    canvas.height = this.$parent.$el.clientHeight;
  }
}
</script>

<style scoped>
canvas {
  background-color: antiquewhite;
}
</style>
