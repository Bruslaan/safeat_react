import React, { useContext } from 'react'
import { MyButton } from '../Button'
import './index.css'
import { Food } from '../Interfaces/interfaces'


import { NumberInput } from '../NumberInput'

import { CartContext } from '../Context/shoppingCardStore'

interface ShoppingItemProps {
    item: Food
}

const ListItem: React.FC<ShoppingItemProps> = ({ item }) => {


    const { increase, decrease, removeProduct } = useContext(CartContext)


    const onNumberChange=(number:number)=>{
        console.log("hallo World")
        number===1 && increase(item)
        number===-1 && decrease(item)
    }

    return (
        <div className="shoppingcard__item">
            <div>
                <h1 className="shoppingcard__text">{item.title}</h1>
                <h1 className="shoppingcard__text">{item.price} €</h1>
            </div>

            <NumberInput initialCount={item.quantity as number}  onChange={onNumberChange}/>

        </div>
    )
}


const SumComponent: React.FC<any> = ({ sum }) => {

    return (
        <div className="shoppingcad__sum">
            <h1 className="shoppingcard__text">Summe:</h1>
            <h1 className="shoppingcard__text">{sum} €</h1>
        </div>
    )
}



export const ShoppingCard = () => {

    const { total, cartItems, } = useContext(CartContext)

    return (
        <div className="shopping__card">
            <h1>Deine Karte</h1>

            {cartItems.map((item: Food) => <ListItem key={item.id} item={item} />)}

            <div className="sticky__button_center sticky__footer">
                <SumComponent sum={total} />
                <MyButton />
            </div>



        </div>
    )
}
