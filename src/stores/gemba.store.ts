import type { Gemba } from '@/models/gemba'
import type { Log } from '@/models/log'
import { addLogToGemba } from '@/services/gemba.service'
import { defineStore } from 'pinia'

type State = {
  gembas: Array<Gemba>
}

export const useGembaStore = defineStore<'gemba', State>('gemba', {
  persist: true,
  state: () => ({
    gembas: []
  }),
  actions: {
    createGemba(gemba: Gemba) {
      this.gembas.push(gemba)
    },
    addLog(gembaId: string, log: Log) {
      this.gembas = this.gembas.map((g) => (g.id === gembaId ? addLogToGemba(g, log) : g))
    }
  }
})
