import React, { useContext } from 'react'
import { MyButton } from '../Button'
import './index.css'

import { NumberInput } from '../NumberInput'

import { CartContext } from '../Context/shoppingCardStore'



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


const SumComponent: React.FC = () => {

    return (
        <div className="shoppingcad__sum">

            <h1 className="shoppingcard__text">Summe:</h1>
            <h1 className="shoppingcard__text">18,99 €</h1>

        </div>
    )
}



export const ShoppingCard = () => {

    const {  total, cartItems,} = useContext(CartContext)

    console.log("Shopping card wurde geladen",  cartItems, total)

    return (
        <div className="shopping__card">
            <h1>Deine Karte</h1>

            <ListItem />
            <ListItem />
            <ListItem />


            <div className="sticky__button_center sticky__footer">
                <SumComponent />
                <MyButton />
            </div>



        </div>
    )
}
