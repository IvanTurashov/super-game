<template>
  <b-form @submit.prevent="addTargets">
    <label>Type a new user and press enter</label>

    <b-form-tags
      ref="tagsInput"
      v-model="targets"
      class="mb-2"
    />

    <b-button
      class="mr-2"
      type="submit"
    >
      Add targets
    </b-button>

    <b-button
      @click="reset"
    >
      Reset
    </b-button>
  </b-form>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api';
import {
  BFormTags, BButton, BForm,
} from 'bootstrap-vue';

export default defineComponent({
  name: 'TargetsCreator',

  components: {
    BFormTags,
    BButton,
    BForm,
  },

  setup(props, { emit }) {
    const targets = ref([]);

    const reset = () => {
      targets.value = [];
    };

    const addTargets = () => {
      emit('add-targets', targets.value);
      reset();
    };

    return {
      targets,
      addTargets,
      reset,
    };
  },
});
</script>
