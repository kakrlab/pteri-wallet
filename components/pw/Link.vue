<template>
  <a v-if="external" :href="to"><slot /></a>
  <NuxtLink v-else :to="to"><slot /></NuxtLink>
</template>

<script setup lang="ts">
const props = defineProps<{ to: string }>()
const external = computed(() => /^(https?:|mailto:)/.test(props.to))
</script>
