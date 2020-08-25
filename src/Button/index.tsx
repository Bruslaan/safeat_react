import React from 'react'
import './index.css'

interface Props {
    clickHandler?: () => void
}

export const MyButton: React.FC<Props> = ({clickHandler}) => {
    return (
        <button className="mein__button" onClick={clickHandler}>Warenkorb <span className="mein__button__badge">3</span></button>
    )
}
