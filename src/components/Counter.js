import React from "react";
import {createStore} from '../redux/createStore';

const initialState = {count: 0}

//чистая функция так как передаем два параметра и работаем только с ними
//неизменность данных так как на выходе мы вернем новый объект а не изменим старый
function reducer(state, action) {
    switch (action.type) {
		case 'INCREMENT':   
			return {count: state.count + action.amount}
		case 'DECREMENT':
			return {count: state.count - action.amount}
		case 'RESET':
			return {count: action.amount}
		default: return state
	}
}


const incrementAction = {type: 'INCREMENT', amount: 1}
const decrementAction = {type: 'DECREMENT', amount: 1}
const reset = {type: 'RESET', amount: 0}

const store = createStore(reducer, initialState)

export default class Counter extends React.Component {
    constructor(props) {
		super(props);

        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
    }

	componentDidMount() {
		store.subscribe(() => this.forceUpdate())
	}

	increment() {
		store.dispatch(incrementAction)
	}

	decrement() {
		store.dispatch(decrementAction)
	}

	reset() {
		store.dispatch(reset)
	}

	render () {
		const count = store.getState().count
		return (
			<div className="counter">
			 <span className="count">{count}</span>
			<div className="buttons">
                  <button className="decrement" onClick={() => this.decrement()}>-</button>
				  <button className="reset" onClick={() => this.reset()}>R</button>
                  <button className="increment" onClick={() => this.increment()}>+</button>
                </div>
			</div>
		)
	}
}

