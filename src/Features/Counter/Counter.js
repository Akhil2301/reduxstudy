import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  increment,
  decrement,
  resetAll,
  incrementByAmount,
} from "./CounterSlice ";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState(0);
  const addvalue = Number(incrementAmount) || 0;

  const reset = () => {
    setIncrementAmount(0);
    dispatch(resetAll());
  };
  return (
    <section>
      <p>{count}</p>
      <div className="add">
        <button
          onClick={() => {
            dispatch(increment());
          }}>
          +
        </button>
        <button
          onClick={() => {
            dispatch(decrement());
          }}>
          -
        </button>
      </div>
      <div className="adddata">
        <input
          type="text"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <div>
          <button
            onClick={() => {
              dispatch(incrementByAmount(addvalue));
            }}>
            Add Amount
          </button>
          <button
            onClick={() => {
              dispatch(reset);
            }}>
            Reset
          </button>
        </div>
      </div>
    </section>
  );
};

export default Counter;
