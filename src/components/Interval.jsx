import { useEffect } from 'react'

export default function Interval({ contador }) {
  useEffect(() => {
    const i = setInterval(() => console.log(contador), 1000)
    return () => clearInterval(i)
  }, [contador])
  return (
    <div>
      <p>Intervalo</p>
    </div>
  )
} 