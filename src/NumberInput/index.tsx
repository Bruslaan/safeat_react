import React from 'react'
import './index.css'

export const NumberInput: React.FC = () => {
    return (

        <div className="wrapper">
            <button className="plusminus" >-</button>
            <input type="number" className="num" value="1" onChange={() => console.log("hallo")} />
            <button className="plusminus add" >+</button>
        </div>

    )
}

