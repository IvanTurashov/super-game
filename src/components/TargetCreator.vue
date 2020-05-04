<template>
  <button
    type="button"
    v-on="$listeners"
  >
    Add target
  </button>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'SpawnButton',
});
</script>
