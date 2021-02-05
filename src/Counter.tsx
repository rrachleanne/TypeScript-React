import * as react from "react";
import { useState, useEffect } from "react";

export const Counter: React.FC = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `you clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};
