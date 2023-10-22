import './App.css'
import { Item } from './components/Item'
import { useItems } from './hooks/useItems'
import { useSEO } from './hooks/useSEO'

function App () {
  const { items, addItem, removeItem } = useItems()
  useSEO(
    {
      title: `React Assesment 01 items[ ${items.length} ]`,
      description: 'React Assesment 01'
    }
  )

  const onHandleSubmit = (evnt: React.FormEvent<HTMLFormElement>) => {
    evnt.preventDefault()
    const { elements }: HTMLFormElement = evnt.currentTarget
    const input = elements.namedItem('inputText')
    const isInput = input instanceof HTMLInputElement
    if (isInput) {
      addItem(input.value)
      input.value = ''
      input.focus()
    }
  }

  const onHandleRemoveItem = (id: string) => () => {
    removeItem(id)
  }

  return (
    <main>
      <h1>React Assesment 01</h1>
      <div id='container'>
        <aside>
          <h2>Add and delete list items</h2>
          <form aria-label='Get user text to add to the list' onSubmit={onHandleSubmit}>
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
              items.length === 0
                ? (<strong>No items in the list...</strong>)
                : (
                <ul>
                  {
                    items.map(item => {
                      return <Item
                      {...item}
                      handleClick={onHandleRemoveItem(item.id)}
                      key={item.id}
                      />
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
