export default class Store {
    constructor(updateState, state) {
        this._updateState = updateState
        this._state = state
    }

    state() {
        return this._state
    }

    update(action) {
        this._state = this._updateState(this._state, action)
    } 
}




