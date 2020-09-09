import React from 'react'
import './index.css'


interface Props {
    initialCount: number
    onChange: (number:number) => void
}

export const NumberInput: React.FC<Props> = ({ initialCount, onChange }) => {
    return (

        <div className="wrapper">
            <button className="plusminus"onClick={() => onChange(-1)} >-</button>
            <span>{initialCount}</span>
            <button className="plusminus add" onClick={() => onChange(1)}>+</button>
        </div>

    )
}

