<script setup lang="ts">
import { useGembaStore } from '@/stores/gemba.store'
import { computed } from 'vue'

const gembaStore = useGembaStore()
const gembas = computed(() => gembaStore.gembas)
</script>

<template>
  <div class="gemba-list">
    <ul>
      <li v-for="gemba in gembas" :key="gemba.id">
        {{ gemba.title }}
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.gemba-list {
}
</style>
