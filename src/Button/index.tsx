import React from 'react'
import './index.css'
import KorbIcon from '../assets/korb.svg'

interface Props {
    clickHandler?: () => void
    itemCount: number
}

export const MyButton: React.FC<Props> = ({ clickHandler, itemCount }) => {

    const noItems = itemCount === 0
    return (
        < button className="mein__button" onClick={clickHandler} >
            <img src={KorbIcon} alt="" className="warenkorb__icon" />
            <span className="mein__button__badge">{itemCount}</span></button >

    )
}
