import { useCounter } from "../custom_hooks/useCounter"

export function Counter () {
  const {counter, toIncrement, toDecrement, toReset} = useCounter()

  return (
    <div className="counter">
      <h1>{counter}</h1>
      <div className="counter-buttons">
        <button className="change button" onClick={toIncrement}>Increment</button>
        <button className="change button" onClick={toDecrement}>Decrement</button>
        <button className="reset button" onClick={toReset}>Reset</button>
      </div>
    </div>
  )
}