
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment,decrement,reset, incrementByAmount } from "./features/counter/counterslice";
import { useState } from "react";

function App() {
  const [Amount,setAmount] = useState(0);
  const count = useSelector((state) => state.counter.value);

  const dispatch = useDispatch();

  function handleIncrementClick() {
    dispatch(increment());
  }
  function handleDecrementClick() {
    dispatch(decrement());
  }
   function handleresetClick() {
    dispatch(reset());
  }
   function handleincrementByAmountClick() {
    dispatch(incrementByAmount(Amount));
  }
  return (
    <>
      <div className="container">
        <button onClick={handleIncrementClick}>+</button>
        <p>count : {count} </p>
        <button onClick={handleDecrementClick}>-</button>
        <br />
        <br /> 
         <button onClick={handleresetClick}>reset</button>
         <br />
         <br />
         <input type="number" 
         value={Amount}
         placeholder="Enter Amount"
         onChange={(e)=>setAmount(e.target.value)}
         />
         <br />
         <br />
         <button onClick={handleincrementByAmountClick}>Inc. value</button>
      </div>
    </>
  );
}

export default App;
