<template>
  <div>
    <LayoutNavbar class="mb-6" />
    <NuxtPage />
  </div>
</template>

<script setup lang="ts"></script>

<style>
body {
  @apply bg-surface-ground text-surface-ground-text;
}

h1 {
  @apply text-4xl font-bold;
}

h2 {
  @apply text-3xl font-bold;
}

h3 {
  @apply text-2xl font-bold;
}

h4 {
  @apply text-xl font-bold;
}

h5 {
  @apply text-lg font-bold;
}

h6 {
  @apply text-base font-bold;
}
</style>
