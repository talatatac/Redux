import store from '../store';




export const INCREMENT = 'INCREMENT';
export const increaseCount = (payload) => {
    return store.dispatch({ type: INCREMENT, payload});
}

export const DECREMENT = 'DECREMENT';
export const decreaseCount = (payload) => {
    return store.dispatch({ type: DECREMENT, payload});
}


export const TEST_FETCH = 'TEST_FETCH';
export const testFetch = () => {

    const osman = fetch('http://dummy.restapiexample.com/api/v1/employees')
        .then(response => response.json())
        .then(res => store.dispatch({ type: TEST_FETCH, payload: res}))
    return osman
}
