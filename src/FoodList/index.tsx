import * as React from 'react';
import './index.css'
import { SnapList, SnapItem } from 'react-snaplist-carousel';
import { CartContext } from '../Context/shoppingCardStore'
import { Food } from '../Interfaces/interfaces';

interface FoodCardProps {
    onClicked: (id: string, index: number) => void
    food: Food
    index: number
}

const MyItem: React.FC<FoodCardProps> = ({ onClicked, food, index }) => {
    const src_url = "http://lorempixel.com/600/600/food/" + food.imgUrl
    const Image = <img className="food_list_item__img" src={src_url} alt="" />

    const { addProduct, cartItems, increase } = React.useContext(CartContext)

    const isInCart = (product: any) => {
        return !!cartItems.find((item: Food) => item.id === product.id);
    }

    const product: Food = food

    return (
        <div className="item" onClick={() => { onClicked(food.id, index) }}>
            {/* {children} */}
            {food.imgUrl ? Image : ""}
            <div className="menu__information">
                <div>
                    <h1>{food.title}</h1>
                    <p>{food.description}</p>
                </div>
                <div className="item__foot">
                    <span>{food.price} €</span>
                    {
                        isInCart(product) &&
                        <div
                            onClick={() => increase(product)}
                            className="btn ">Add more</div>
                    }
                    {
                        !isInCart(product) &&
                        <div
                            onClick={() => addProduct(product)}
                            className="btn ">Add to cart</div>
                    }
                    {/* <button onClick={() => clearCart()}>Delete all</button> */}
                </div>
            </div>
        </div>
    );
}


interface FoodListProps {
    foodList: Array<Food>
}

export const FoodList: React.FC<FoodListProps> = ({ foodList }) => {

    const snapList = React.useRef(null);

    const openClickedItem = (itemId: String, clickedIndex: number) => {
        console.log(itemId, clickedIndex, " Open Clicked")
    }

    return (
        <div>
            <SnapList ref={snapList} direction="vertical" className="list__container">

                {foodList.map((food, index) => {
                    const url = { imgUrl: index + 1 }
                    const Food = { ...url, ...food }
                    return (
                        <SnapItem key={food.id} margin={{ top: '15px', bottom: '15px' }} snapAlign="center">
                            <MyItem index={index} food={Food} onClicked={(itemId, clickedIndex) => openClickedItem(itemId, clickedIndex)}></MyItem>
                        </SnapItem>
                    )
                })}
            </SnapList>
        </div>

    );
}
