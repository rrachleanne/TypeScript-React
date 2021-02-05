import * as react from 'react'

// exmaple of an array
export const Array: React.FC = () => {
    let exampleArray: (number | string) [] =['apples', 2, 3, 'bannana']
        return (
            <h1>This is my array {exampleArray}</h1>
        );
}



