import { useState } from "react";
import "./App.css";

function App() {
  console.log(" page rendered" , Math.random())
  const [value, setValue] = useState({value : 1});

  // const [multiplicationvalue, setMultiplicationValue] = useState(1);
  // let multiplicationValue  = value * 5

  const chickMe = () => {
    console.log("logged")
  //  setMultiplicationValue (value * 5);
   setValue ({value : 1})
  };

  return (
    <>
      <h1>main value :{value.value} </h1>

      <button onClick={chickMe}>click to logged</button>
      {/* <h2>multiplication {multiplicationValue}</h2> */}
    </>
  );
}

export default App;
