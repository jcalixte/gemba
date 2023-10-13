<script setup lang="ts">
import { useGembaStore } from '@/stores/gemba.store'

const gembaStore = useGembaStore()
</script>

<template>
  <div class="gemba-list">
    <ul>
      <li v-for="gemba in gembaStore.gembas" :key="gemba.id">
        {{ gemba.title }}
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.gemba-list {
}
</style>
