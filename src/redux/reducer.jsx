const defaultstate = {
    count: 0
}

function reducer(state = defaultstate, action) {
    switch(action.type) {
        case 'INCREMENT':
            return { count: state.count + 1 }
        case 'DECREMENT':
            return { count: state.count - 1 }
        default:
            return state;
    }
}

export default reducer;