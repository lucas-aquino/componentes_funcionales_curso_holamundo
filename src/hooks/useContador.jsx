import { useState } from 'react'

export function useContador(inicial) {
  const [contador, setContador] = useState(inicial)

  const incrementar = () => {
    setContador((contador) => contador + 1)
  }

  return [contador, incrementar]
}