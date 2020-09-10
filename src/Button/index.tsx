import React from 'react'
import './index.css'
import KorbIcon from '../assets/korb.svg'
import { useHistory } from "react-router-dom"
interface Props {
    clickHandler?: () => void
    itemCount: number
}

export const MyButton: React.FC<Props> = ({ clickHandler, itemCount }) => {

    // const noItems = itemCount === 0
    return (
        < button className="mein__button" onClick={clickHandler} >
            <img src={KorbIcon} alt="" className="warenkorb__icon" />
            <span className="mein__button__badge">{itemCount}</span></button >

    )
}


export const NormalButton: React.FC<any> = ({ clickHandler }) => {
    let history = useHistory();

    function handleClick() {
        history.push("/pay");
    }
    return (
        <button className="mein__button" onClick={handleClick} >
            Bestellen</button >
    )
}
