export const initialState = {
  basket: ["Rishi", "Om", "Sam" ,"Sahil"],
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD TO BASKET":
      //Logic for adding item to basket
      break;

    case "REMOVE FROM BASKET":
      //Logic for removing item from basket
      break;

    default:
      return state;
  }
}

export default reducer;
