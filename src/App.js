import Counter from "./components/Counter";
import Store from "./redux/store";

//чистая функция так как передаем два параметра и работаем только с ними
//неизменность данных так как на выходе мы вернем новый объект а не изменим старый
// function updateState(state, action) {
//     if (action.type === "INCREMENT") {
//         return { count: state.count + action.amount };
//     } else if (action.type === "DECREMENT") {
//         return { count: state.count - action.amount };
//     } else {
//         return state;
//     }
// }

function App() {
    // const initialState = {count: 0}
    // const store = new Store(updateState, initialState)

    // const unsubscribe = store.subscribe(() => console.log('State changed', store.state))
    // store.subscribe(() => console.log('State changed', store.state))
    // store.update({type: 'INCREMENT', amount: 5})
    // //unsubscribe()
    // store.update({type: 'DECREMENT', amount: 2})

    return <div className="App">{<Counter />}</div>;
}

export default App;
