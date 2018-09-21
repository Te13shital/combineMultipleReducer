const initialState = {
  a: 1,
  b: 1
};

const reducer = (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case "UPDATE_A":
      return {
        ...state,
        a: state.a + state.b,
      }

    case "UPDATE_B":
      return {
        ...state,
        b: state.b + state.a,
      }

      break;
  }
  return newState;
};

export default reducer;
