import type { Gemba } from '@/models/gemba'
import type { Log } from '@/models/log'
import { nanoid } from 'nanoid'

export const createGemba = (gemba: Omit<Gemba, 'id' | 'logs' | 'date'>): Gemba => ({
  id: nanoid(),
  logs: [],
  date: new Date().toISOString(),
  ...gemba
})

export const addLogToGemba = (gemba: Gemba, log: Log): Gemba => ({
  ...gemba,
  logs: [...gemba.logs, log]
})
