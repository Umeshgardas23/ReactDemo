import { useReducer } from "react";

const initialState = { count: 0, name: "umesh" };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count === 0 ? 0 : state.count - 1 };
    case "Maxxzoom":
      return { ...state, name: "Maxxzoom" };
    default:
      return state;
  }
}

const Counter3 = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count:{state.count} </p>
      <p>Count:{state.name} </p>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "Maxxzoom" })}>
        Change Name
      </button>
    </div>
  );
};

export default Counter3;
