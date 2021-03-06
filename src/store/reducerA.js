const initialState = {
    a: 1
};

const reducer = (state = initialState, action) => {
    const newState = { ...state };

    switch (action.type) {
        case "UPDATE_A":
            return {
                ...state,
                a: state.a + action.b,
            }
            break;
    }
    return newState;
};

export default reducer;
