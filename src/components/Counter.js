import React from 'react'

export const CounterComponent = ({onClick, value}) => (
    <button onClick={onClick}>count up ({value})</button>
)
