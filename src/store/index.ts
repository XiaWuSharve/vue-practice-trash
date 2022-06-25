import { defineStore } from 'pinia'

export const useContentStore = defineStore('content', {
  state: () => ({
    id: 0,
    selectedId: 0,
  })
})
