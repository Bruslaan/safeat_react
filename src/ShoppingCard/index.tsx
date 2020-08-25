import React from 'react'
import './index.css'

import {NumberInput} from '../NumberInput'





const ListItem: React.FC = () => {

    return (
        <div className="shoppingcard__item">
            <div>
                <h1 className="shoppingcard__text">Pizza des Pastas Sohn</h1>
                <h1 className="shoppingcard__text">18,99 Euro</h1>
            </div>

            <NumberInput />

        </div>
    )
}



export const ShoppingCard = () => {
    return (
        <div className="shopping__card">
            <h1>Deine Karte</h1>

            <ListItem />
            <ListItem />
            <ListItem />


        </div>
    )
}
