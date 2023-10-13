<script setup lang="ts">
import GembaList from '@/components/GembaList.vue'
import type { Gemba } from '@/models/gemba'
import { createGemba } from '@/services/gemba.service'
import { useGembaStore } from '@/stores/gemba.store'
import { useRouter } from 'vue-router'

const router = useRouter()
const gembaStore = useGembaStore()

const newGemba = () => {
  const gemba: Gemba = createGemba({
    title: ''
  })

  gembaStore.createGemba(gemba)

  router.push({
    name: 'Gemba',
    params: {}
  })
}
</script>

<template>
  <main>
    <GembaList />
    <button @click="newGemba">New gemba</button>
  </main>
</template>
