import React from 'react'
import './index.css'

export const NumberInput: React.FC = () => {
    return (

        <div className="wrapper">
            <button className="plusminus" >-</button>
            <span>1</span>
            <button className="plusminus add" >+</button>
        </div>

    )
}

