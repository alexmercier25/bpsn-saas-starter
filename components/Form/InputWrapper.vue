<template>
  <div>
    <label class="block" :for="props.for">{{ props.label }}</label>
    <slot />
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  for: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
});
</script>
