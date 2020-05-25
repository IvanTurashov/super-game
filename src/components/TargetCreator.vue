<template>
  <b-form
    @submit.prevent="addTargets"
  >
    <b-form-tags
      ref="tagsInput"
      v-model="targets"
      class="mb-2"
      placeholder="Добавить названия целей"
    />

    <b-button
      class="mr-2"
      variant="success"
      type="submit"
      block
    >
      Let's play!
    </b-button>
  </b-form>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api';
import {
  BFormTags, BButton, BForm,
} from 'bootstrap-vue';
import startMembers from './startMembers';

export default defineComponent({
  name: 'TargetsCreator',

  components: {
    BFormTags,
    BButton,
    BForm,
  },

  setup(props, { emit }) {
    const targets = ref(startMembers);

    const addTargets = () => {
      emit('input', targets.value);
    };

    return {
      targets,
      addTargets,
    };
  },
});
</script>
