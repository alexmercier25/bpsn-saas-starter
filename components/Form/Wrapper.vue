<template>
  <form :id="id" @submit.prevent="onSubmit">
    <slot />
    <Button
      :loading="props.loading"
      class="mt-4"
      :label="props.button?.label"
      type="submit"
    />
  </form>
</template>

<script setup lang="ts">
const props = defineProps({
  button: {
    type: Object,
    required: true,
  },
  loading: {
    type: Boolean,
    required: false,
    default: false,
  },
  id: {
    type: String,
    required: false,
    default: `form_${Math.random().toString(36).substr(2, 9)}`,
  },
});
const emits = defineEmits(["submit"]);

const onSubmit = () => {
  emits("submit");
};

watch(
  () => props.loading,
  (loading) => {
    const inputs = document.querySelectorAll(`form#${props.id} input`);
    inputs.forEach((input) => {
      input.disabled = loading;
    });
  }
);
</script>
