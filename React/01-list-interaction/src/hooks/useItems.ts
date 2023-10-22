import { useState } from 'react'

export interface ListItem {
  id: string
  timestamp: number
  text: string

}

// const INITIAL_ITEMS: ListItem[] = [
//   {
//     id: crypto.randomUUID(),
//     timestamp: Date.now(),
//     text: 'Item 1'
//   },
//   {
//     id: crypto.randomUUID(),
//     timestamp: Date.now(),
//     text: 'Item 2'
//   },
//   {
//     id: crypto.randomUUID(),
//     timestamp: Date.now(),
//     text: 'Item 3'
//   }
// ]

export const useItems = () => {
  const [items, setItems] = useState<ListItem[]>([])

  const addItem = (text: string) => {
    const newItem = { id: crypto.randomUUID(), timestamp: Date.now(), text }
    setItems(prev => [...prev, newItem])
  }

  const removeItem = (id: string) => {
    setItems(prev => prev.filter(item => item.id !== id))
  }

  return { items, addItem, removeItem }
}
