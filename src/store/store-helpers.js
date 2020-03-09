

export function reducer(initial, ...obj) {

    const handlers = Object.assign({}, ...obj);

    return function reducer(state = initial, action) {

        return handlers[action.type]
            ? handlers[action.type](state, action)
            : state;

    };

}
