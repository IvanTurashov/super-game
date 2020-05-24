<template>
  <div class="winner">
    <div class="winner__name">{{ winnerName }}!</div>

    <b-button
      @click="startNewGame"
      variant="success"
    >
      New Game
    </b-button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { defineComponent, onMounted } from '@vue/composition-api';
import VueConfetti from 'vue-confetti';
import {
  BButton,
} from 'bootstrap-vue';

Vue.use(VueConfetti);

export default defineComponent({
  name: 'Winner',

  components: {
    BButton,
  },

  props: {
    winnerName: {
      type: String,
      required: true,
    },
  },

  setup(props, { emit, root }) {
    const startNewGame = () => {
      emit('new-game');
    };

    onMounted(() => {
      root.$confetti.start();
    });

    return {
      startNewGame,
    };
  },
});
</script>

<style>
.winner {
  z-index: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
}

.winner__name {
  color: #e54d18;
  font-size: 60px;
  font-weight: bold;
  text-transform: uppercase;
  font-family: 'Open Sans', sans-serif;
}
</style>
