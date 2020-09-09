import * as React from 'react';
import './index.css'
import { SnapList, SnapItem } from 'react-snaplist-carousel';
import { CartContext } from '../Context/shoppingCardStore'

interface FoodCardProps {
    onClick?: () => void
    imgUrl?: number
    food: Food
}

interface Food {

    title: String
    price: number
    imgURL?: String
    description: String

}



const MyItem: React.FC<FoodCardProps> = ({ onClick, imgUrl, food }) => {
    const src_url = "http://lorempixel.com/600/600/food/" + imgUrl
    const Image = <img className="food_list_item__img" src={src_url} alt="" />

    const { increase } = React.useContext(CartContext)
    const addToBasket = () => {
        // setShoppingCard([...shoppingCard, { name: "test" }])
        increase({
            id: 3,
            name: "Wine - Gato Negro Cabernet",
            price: 51.01,
            photo: "/img/3.jpg"
        })

    }
    return (
        <div className="item" onClick={() => addToBasket()}>
            {/* {children} */}
            {imgUrl ? Image : ""}
            <div className="menu__information">
                <div>
                    <h1>{food.title}</h1>
                    <p>{food.description}</p>
                </div>

                <div className="item__foot">
                    <span>{food.price} €</span>
                    <button >+</button>
                </div>

            </div>
        </div>
    );
}


interface FoodListProps {
    foodList: Array<Food>
}

export const FoodList: React.FC<FoodListProps> = ({ foodList }) => {
    return (
        <SnapList direction="vertical" className="list__container">

            {foodList.map((food, index) => {
                return (
                    <SnapItem key={index} margin={{ top: '15px', bottom: '15px' }} snapAlign="center">
                        <MyItem food={food} imgUrl={index + 1}></MyItem>
                    </SnapItem>
                )
            })}
        </SnapList>
    );
}
