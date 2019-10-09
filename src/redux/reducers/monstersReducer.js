const monstersReducer = (state = {}, action) => {
    if (action.type === 'SET_MONSTERS') {
        return action.payload;
    } else {
        return state;
    }
}

export default monstersReducer;