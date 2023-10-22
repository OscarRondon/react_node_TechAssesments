export function Item (
  { id, text, handleClick }:
  { id: string, text: string, handleClick: () => void }
) {
  return (
    <li key={id}>
      {text}
      <button onClick={handleClick}>remove</button>
    </li>
  )
}
