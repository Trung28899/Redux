import * as actionTypes from "./actions";

const initialState = {
  counter: 0,
  results: [],
};

const reducer = (state = initialState, action) => {
  // Doesn't need break here cause return already do the work
  switch (action.type) {
    case actionTypes.INCREMENT:
      const newState = Object.assign({}, state);
      newState.counter = state.counter + 1;
      return newState;

    case actionTypes.DECREMENT:
      return {
        ...state,
        counter: state.counter - 1,
      };

    case actionTypes.ADD:
      return {
        ...state,
        counter: state.counter + action.val,
      };

    case actionTypes.SUBTRACT:
      return {
        ...state,
        counter: state.counter - action.val,
      };
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({ id: new Date(), value: state.counter }),
      };
    case actionTypes.DELETE_RESULT:
      // 1st way of updating array: with newArray variable
      // const newArray = [...state.results];
      // const id = 2;
      // newArray.splice(id, 1);

      // 2nd way of updating array: with updatedArray variable
      // argument true in filter > get the value,
      // argument false in filter > don't get the value
      const updatedArray = state.results.filter(
        (result) => result.id !== action.resultElId
      );
      return {
        ...state,
        // results: newArray,
        results: updatedArray,
      };
    default:
      return state;
  }
};

export default reducer;
