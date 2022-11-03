// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

const ACTIONS = {
  INCREMENT: 'INCREMENT'
}

function incrementAction(step) {
  return {type: ACTIONS.INCREMENT, step}
}

function countReducer(state, action) {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return {...state, count: state.count + action.step }  
    default:
      return {...state}
  }
}

function Counter({initialCount = 0, step = 1}) {
  const [{count}, dispatch] = React.useReducer(countReducer, {count: initialCount})
  const increment = () => dispatch(incrementAction(step))
  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
