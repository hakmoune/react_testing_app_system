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
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <span>Current Count: {counter}</span>
            <button onClick={() => setCounter(counter - 1)}>-</button>
        </div>
    );
}

