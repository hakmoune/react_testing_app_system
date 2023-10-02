import React, { useState } from "react";

export interface CounterProps {
    description: string,
    defaultCount: number
}

export function Counter({ description, defaultCount }: CounterProps) {
    const [counter, setCounter] = useState(defaultCount)

    return (
        <div>
            <h2>Desc: {description} - DC: {defaultCount}</h2>
            <button aria-label="increment" onClick={() => setCounter(counter + 1)}>+</button>
            <span>Current Count: {counter}</span>
            <button aria-label="decrement" onClick={() => setCounter(counter - 1)}>-</button>
        </div>
    );
}

