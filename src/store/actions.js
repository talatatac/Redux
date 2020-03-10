import store from '../store';




export const INCREMENT = 'INCREMENT';
export const increaseCount = (payload) => {
    return store.dispatch({ type: INCREMENT, payload});
}

export const DECREMENT = 'DECREMENT';
export const decreaseCount = (payload) => {
    return store.dispatch({ type: DECREMENT, payload});
}

