import react from "react";

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
}
// react function component + passing prop
export const PropsTesting: React.FC<Props> = ({ text, obj }) => {
  return (
    <div>
      <input />
    </div>
  );
};
