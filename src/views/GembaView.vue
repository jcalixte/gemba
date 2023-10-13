<script setup lang="ts">
import { useGembaStore } from '@/stores/gemba.store'

const props = defineProps<{
  id: string
}>()

const gembaStore = useGembaStore()
const gemba = gembaStore.gembas.find((g) => g.id === props.id)
</script>

<template>
  <div class="gemba-view">
    <template v-if="gemba">
      <h1>{{ gemba.title }}</h1>
      <h2>{{ gemba.date }}</h2>
    </template>
    <template v-else>Gemba {{ id }} not found.</template>
  </div>
</template>

<style scoped lang="scss">
.gemba-view {
}
</style>
