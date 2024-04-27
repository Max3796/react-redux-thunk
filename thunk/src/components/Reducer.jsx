const initialState = {
    users: [],
    error: "",
  };
  
  const Reducer = (state = initialState, action) => {
    switch (action.type) {
      case "FETCH_DATA_SUCCESS":
        return { users: action.payload, error: "" };
  
      case "FETCH_DATA_FAILURE":
        return { users: [], error: action.payload };
  
      default:
        return state;
    }
  };
  
  export default Reducer;