import React, { useState } from "react";

export interface CounterProps {
    description: string,
    defaultCount: number
}

export const Counter: React.FC<CounterProps> = ({ description, defaultCount }) => {
    const [counter, setCounter] = useState<number>(defaultCount)
    const [incrementer, setIncrementer] = useState<number>(1)

    const onHandleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const inputValue = parseInt(e.target.value, 10)
        setIncrementer(inputValue || 0)
    }

    return (
        <div>
            <h2>Desc: {description} - DC: {defaultCount}</h2>
            <div>
                <input
                    type="text"
                    value={incrementer}
                    onChange={onHandleChange}
                    onFocus={(e) => e.target.select()}
                    placeholder="incrementor"
                />
            </div>
            <button aria-label="increment" onClick={() => setTimeout(() => setCounter(counter + incrementer))}>+</button>
            <span>Current Count: {counter}</span>
            <button aria-label="decrement" onClick={() => setCounter(counter - incrementer)}>-</button>
        </div >
    );
}

