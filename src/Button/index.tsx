import React from 'react'
import './index.css'
import KorbIcon from '../assets/korb.svg'

interface Props {
    clickHandler?: () => void
}

export const MyButton: React.FC<Props> = ({ clickHandler }) => {
    return (
        <button className="mein__button" onClick={clickHandler}>
            <img src={KorbIcon} alt="" className="warenkorb__icon" />

            <span className="mein__button__badge">3</span></button>
    )
}
