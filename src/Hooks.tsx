import react, { useState, useRef } from "react";

// creating another interface to pass
interface Person {
  firstName: string;
  lastName: string;
}

//passing a prop called text with the type 'string'
interface Props {
  text: string;
  ok?: boolean;
  i?: number;
  // say what you want it to return (void = nothing, number, string etc)
  //expect parameter called bob and that is a string
  fn?: (bob: string) => string;
  // passing the Person object interface
  obj: Person;
  handleChange?: (event: react.ChangeEvent<HTMLInputElement>) => void;
}

interface TextNode {
  text: string;
}

// react function component + passing prop
export const HookssTesting: React.FC<Props> = ({ handleChange }) => {
  //hook
  // hover over count and setCount will auto assign the type
  const [count, setCount] = useState<TextNode>({ text: "hello" });
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div>
      <input ref={inputRef} onChange={handleChange} />
    </div>
  );
};
