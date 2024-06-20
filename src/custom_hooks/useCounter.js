import { useState } from "react";

export function useCounter(initialValue = 0, changingValue = 1) {
  const [counter, setCounter] = useState(initialValue);

  function handleIncrement() {
    setCounter((c) => c + changingValue);
  }

  function handleDecrement() {
    setCounter((c) => c - changingValue);
  }

  function handleReset() {
    setCounter(initialValue);
  }

  return {
    counter: counter,
    toIncrement: handleIncrement,
    toDecrement: handleDecrement,
    toReset: handleReset,
  };
}
