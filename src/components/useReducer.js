import React, { useState } from "react";

const useReducer = () => {
  const [state, setstate] = useState({
    userId: "",
    username: "",
    email: "",
    address: {
      house: "",
      street: "",
      city: "",
      state: "",
    },
  });

  //   syntax
  //   useReducer(reducer, initialState)

//   const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      {/* Reduce - ??? - function which helps to change the state of application by using actions */}


      
    </div>
  );
};

export default useReducer;
