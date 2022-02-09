
import Store from './redux/store';

function updateState(state, action) {
  if(action.type === 'INCREMENT') {
      return state + action.amount
  } else if(action.type === 'DECREMENT') {
      return state - action.amount
  } else {
      return state
  }
}

function App() {
  const store = new Store(updateState, 5)
  store.update({type: 'INCREMENT', amount: 5})
  store.update({type: 'DECREMENT', amount: 2})
  return (
    <div className="App">
     {
       console.log(store.state())
      //console.log(updateState(5, {type: 'INCREMENT', amount: 5}))
     }
    </div>
  );
}

export default App;
