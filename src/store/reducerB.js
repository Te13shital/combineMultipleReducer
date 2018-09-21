const initialState = {
    b: 1
};

const reducer = (state = initialState, action) => {
    const newState = { ...state };

    switch (action.type) {
        case "UPDATE_B":
            return {
                ...state,
                b: state.b + action.a,
            }

            break;
    }
    return newState;
};

export default reducer;
