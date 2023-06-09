import { useReducer, useEffect } from 'react'
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
}

function App() {
  const [ contador, incrementar ] = useContador(0)
  useEffect(() => {
    document.title = `Contador ${contador}`
  }, [ contador ])

  const [ state, dispatch ] = useReducer(reducer, inicial)

  return (
    <div className="card">
      <button onClick={incrementar}>
        Contador {contador}
      </button>
      <div>
        <span>Contador Reduce {state.contador}</span>
        <button onClick={() => dispatch({ type: 'incrementar' })} >mas</button>
        <button>menos</button>
      </div>
      <Interval contador={contador}></Interval>
    </div>
  )
}

export default App
