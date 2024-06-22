import { useReducer } from "react";

const initialState = {
    count: 0,
    step: 1
};

function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { ...state, count: state.count + state.step };
        case 'decrement':
            return { ...state, count: state.count - state.step };
        case 'setCount':
            return { ...state, count: Number(action.payload) };
        case 'setStep':
            return { ...state, step: Number(action.payload) };
        case 'reset':
            return initialState;
        default:
            throw new Error('Unknown action');
    }
}

function DateCounter() {
    const [state, dispatch] = useReducer(reducer, initialState);

    const date = new Date("June 21, 2027");
    date.setDate(date.getDate() + state.count);

    return (
        <div className="counter">
            <div>
                <input
                    type="range"
                    min="0"
                    max="10"
                    value={state.step}
                    onChange={(e) => dispatch({ type: 'setStep', payload: e.target.value })}
                />
                <span>{state.step}</span>
            </div>

            <div>
                <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
                <input
                    value={state.count}
                    onChange={(e) => dispatch({ type: 'setCount', payload: e.target.value })}
                />
                <button onClick={() => dispatch({ type: 'increment' })}>+</button>
            </div>

            <p>{date.toDateString()}</p>

            <div>
                <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
            </div>
        </div>
    );
}

export default DateCounter;
