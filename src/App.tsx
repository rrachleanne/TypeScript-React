import * as React from "react";
import { Counter } from "./Counter";
import { HookssTesting } from "./Hooks";
import { PropsTesting } from "./Props";
import {Array} from "./Array"

// react function component
const App: React.FC = () => {
  return (
    <div>
      <div className="props">
        <h1>Props</h1>
        {/* passing in props from the TextField file */}
        <PropsTesting text="hello" obj={{ firstName: "", lastName: "" }} />
      </div>
      <div className="hooks">
        <h1>Hooks</h1>
        <HookssTesting text="hello" obj={{ firstName: "", lastName: "" }} />
      </div>
      <div className="counter">
        <h1>Counter</h1>
        <Counter/>
      </div>
      <div className="array">
        <h1>Array</h1>
       <Array/>
       
      </div>
    </div>
  );
};

export default App;
