import userEvent from '@testing-library/user-event'
import { describe, test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from '../App'

describe('<App />', () => {
  // test('should work', () => {
  //   render(<App />)
  //   // screen.debug()
  //   screen.getByText('List')
  // })

  test('Add and Remove ListItem', async () => {
    const user = userEvent.setup()

    render(<App />)

    // search for the input text box
    const inputText = screen.getByRole('textbox')
    expect(inputText).toBeDefined()

    // search for the form
    const form = screen.getByRole('form')
    expect(form).toBeDefined()

    // search for the Add button
    const randomText = crypto.randomUUID()
    const buttomAdd = form.querySelector('button')
    expect(buttomAdd).toBeDefined()
    await user.type(inputText, randomText)
    await user.click(buttomAdd!)

    // check the ListItem was added
    const listItem = screen.getByRole('list')
    expect(listItem).toBeDefined()
    expect(listItem.childElementCount).toBe(1)

    // seach for the item added and delete it
    const itemAdded = screen.getByText(randomText)
    expect(itemAdded).toBeDefined()
    const buttonRemove = itemAdded.querySelector('button')
    expect(buttonRemove).toBeDefined()
    await user.click(buttonRemove!)
    const noResult = screen.getByText('No items in the list...')
    expect(noResult).toBeDefined()

  })
})
