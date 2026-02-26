import { useState } from "react";

function useCounter(initialValue, step, min, max) {
  const [value, setValue] = useState(initialValue);

  const increment = () => setValue((prev) => Math.min(prev + step, max));
  const decrement = () => setValue((prev) => Math.max(prev - step, min));
  const reset = () => setValue(initialValue);

  return [value, increment, decrement, reset];
}

export default useCounter;
