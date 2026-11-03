<template>
  <PwLink :to="to" class="button" :class="[primary ? 'primary' : '', small ? 'small' : '']"><slot /></PwLink>
</template>

<script setup lang="ts">
defineProps<{ to: string; primary?: boolean; small?: boolean }>()
</script>
