<script setup lang="ts">
import { createGemba } from '@/services/gemba.service'
import { useGembaStore } from '@/stores/gemba.store'
import { useRouter } from 'vue-router'

const router = useRouter()
const gembaStore = useGembaStore()

const newGemba = () => {
  gembaStore.createGemba(
    createGemba({
      title: ''
    })
  )

  router.push({
    name: 'Gemba',
    params: {}
  })
}
</script>

<template>
  <div class="gemba-new"></div>

  <button @click="newGemba">New gemba</button>
</template>

<style scoped lang="scss">
.gemba-new {
}
</style>
