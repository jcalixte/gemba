import type { Log } from '@/models/log'

export type Gemba = {
  id: string
  date: string
  title: string
  logs: Array<Log>
}
