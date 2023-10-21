import { useState } from 'react'

import './App.css'

interface ListItem{
  id: string,
  timestamp: number,
  text: string,

}

const INITIAL_ITEMS: ListItem[] = [
  {
    id: crypto.randomUUID(),
    timestamp:Date.now(),
    text: 'Item 1'
  },
  {
    id: crypto.randomUUID(),
    timestamp: Date.now(),
    text: 'Item 2'
  },
  {
    id: crypto.randomUUID(),
    timestamp:Date.now(),
    text: 'Item 3'
  }
]

function App() {
  
  const [items, setItems] = useState(INITIAL_ITEMS)
  
  const onHandleSubmit = (evnt: React.FormEvent<HTMLFormElement>) => {
    evnt.preventDefault()
    const { elements }:HTMLFormElement = evnt.currentTarget
    const input = elements.namedItem('inputText')
    const isInput = input instanceof HTMLInputElement
    if (isInput) {
      console.log(input.value)
      const newItem = {id: crypto.randomUUID(), timestamp: Date.now(), text: input.value}
      setItems(prev => [...prev, newItem])
      input.value = ''
      input.focus()
    }
  }
  
  const onHandleRemoveItem = (id: string) => () =>{
    setItems(prev => prev.filter(item => item.id !== id))
  }

  return (
    <main>
      <h1>React Assesment 01</h1>
      <div id='container'>
        <aside>
          <h2>Add and delete list items</h2>
          <form onSubmit={onHandleSubmit}>
            <label>
              Input
              <input type="text" id="intputText" name="inputText" required placeholder="Write some text"/>
            </label>
            <button>Add text</button>
          </form>
        </aside>
        <section>
          <h2>List</h2>
            {
              items.length === 0 ? (<strong>No items in the list...</strong>) :
              (
                <ul>
                  {
                    items.map(item => {
                      return (
                        <li key={item.id}>
                          {item.text}
                          <button  onClick={onHandleRemoveItem(item.id)}>remove</button>
                        </li>
                      )
                    })
                  }
                </ul>
              )
            }
        </section>
      </div>
    </main>
  )
}

export default App
