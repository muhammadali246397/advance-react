import { useState } from "react";
import FromText from "./FromText";
import UseReducerExample from "./UseReducerExample";


const App = () => {
  const [counter, setCounter] = useState(0)
  return (
    <div>
      <h1>this is counter {counter}</h1>

      <button onClick={() => setCounter((previusCounter) => previusCounter + 3)}>Increment</button>
      <button onClick={() => setCounter((previusCounter) => previusCounter - 1)}>Decriment</button>
      <button onClick={() => setCounter(0)}>Reset</button>
      <FromText />
      <br />
      <br />
      <UseReducerExample/>
    </div>
  );
};

export default App;