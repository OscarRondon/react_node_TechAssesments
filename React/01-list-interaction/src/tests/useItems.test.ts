import { describe, expect, test } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { useItems } from '../hooks/useItems'


describe('useItems Hook', () => {
  test('Add and Remove Items', () => {
    const { result } = renderHook(() => useItems())
    expect(result.current.items).toEqual([])
    act(() => {
      result.current.addItem('Test Item')
    })
    expect(result.current.items.length).toEqual(1)

    act(() => {
      result.current.removeItem(result.current.items[0].id)
    })
    expect(result.current.items.length).toEqual(0)

  })
})
