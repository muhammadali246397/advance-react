import { useReducer } from "react";

const initialstate = {count:0}

type TAction = {
    type:string;
    payload?:string;
}

const reducer = (initialState: typeof initialstate, action:TAction) => {
switch (action.type) {
    case 'increment':
        return {count:initialState.count + 1}

    case 'decrement':
        return {count: initialState.count - 1}
        

    default:
        return initialState
}
}


const UseReducerExample = () => {

const [state, dispatch] = useReducer(reducer,initialstate)
    return (
        <div>
            <h1>starting the use reducer component</h1>
            <h3>counter = {state.count}</h3>
            <button onClick={() => dispatch({type:'increment'})}>Incriment</button>
            <button onClick={() => dispatch({type: 'decrement'})}>Decrement</button>

            <h2>useReducer with form</h2>
        </div>
    );
};

export default UseReducerExample;