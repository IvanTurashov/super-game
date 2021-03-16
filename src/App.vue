<template>
  <div id="app">
    <Game
      v-if="isGameStarted"
      :target-keys="targets"
      @win="onWin"
    />

    <div
      v-else
      class="h-100 d-flex flex-row justify-content-center align-items-center"
    >
      <winner
        v-if="winnerName"
        :winner-name="winnerName"
        @new-game="startNewGame"
      />

      <target-creator
        v-else
        class="w-25"
        v-model="targets"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from '@vue/composition-api';
import Game from '@/components/Game.vue';
import TargetCreator from '@/components/TargetCreator.vue';
import Winner from '@/components/Winner.vue';

export default defineComponent({
  name: 'App',
  components: {
    Game,
    TargetCreator,
    Winner,
  },

  setup() {
    const targets = ref([]);
    const winnerName = ref('');
    const isGameStarted = computed(() => targets.value.length > 0);

    const onWin = (name: string): void => {
      targets.value = [];
      winnerName.value = name;
    };

    const startNewGame = (): void => {
      winnerName.value = '';
    };

    return {
      targets,
      winnerName,
      isGameStarted,
      onWin,
      startNewGame,
    };
  },
});
</script>

<style>
html, body, #app {
  height: 100%;
}


body {
  margin: 0;
  background: radial-gradient(circle, rgba(252, 247, 174, 1) 0%, rgba(223, 197, 75, 1) 100%);
}
</style>
