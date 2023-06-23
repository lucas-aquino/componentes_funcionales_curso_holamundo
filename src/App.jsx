import { useReducer, useEffect, useState, useRef } from 'react'
import { useContador } from './hooks/useContador'
import Interval from './components/Interval'
import './App.css'

// state = { contador: 0 }
// action = { type: string, payload: any }

const inicial = { contador: 0 }

const reducer = (state, action) => {
  if(action.type === 'incrementar') {
    return { contador: state.contador + 1 }
  }

  if(action.type === 'decrementar') {
    return { contador: state.contador - 1 }
  }

  if(action.type === 'set') {
    return { contador: action.payload }
  }

  return state
}

function App() {
  const [ contador, incrementar ] = useContador(0)
  useEffect(() => {
    document.title = `Contador ${contador}`
  }, [ contador ])

  const [ state, dispatch ] = useReducer(reducer, inicial)
  const [ valor, setValor ] = useState(0)

  const divRef = useRef()

  const clickRandomdiv = () => {
    const current = divRef.current

    current.innerHTML = `Este es el alto del componente actual ${current.clientHeight}`
  }

  const inputRef = useRef()
  const foco = () => {
    inputRef.current.focus()
  }

  return (
    <div className="card">
      <button onClick={incrementar}>
        Contador {contador}
      </button>
      <div>
        <div>
          <span>Contador Reduce {state.contador}</span>
          <input value={valor} onChange={e => setValor(e.target.value)}/>
          <button onClick={() => dispatch({ type: 'decrementar' })}>menos</button>
          <button onClick={() => dispatch({ type: 'incrementar' })} >mas</button>
          <button onClick={() => dispatch({ type: 'set', payload: valor })}>Setear en {valor}</button>
        </div>
        
        <div>
          <button  onClick={foco} >enfocar al input</button>
          <input ref={inputRef} type="text" />
          <div className='reference-test' onClick={clickRandomdiv} ref={divRef}>
            hola
          </div>
        </div>
      </div>
      <Interval contador={contador}></Interval>
    </div>
  )
}

export default App
