import * as React from 'react';
import './index.css'
import { SnapList, SnapItem, useScroll } from 'react-snaplist-carousel';
import { CartContext } from '../Context/shoppingCardStore'
import { Food } from '../Interfaces/interfaces';

interface FoodCardProps {
    onClicked: (id: string) => void
    food: Food
}

const MyItem: React.FC<FoodCardProps> = ({ onClicked, food }) => {
    const src_url = "http://lorempixel.com/600/600/food/" + food.imgUrl
    const Image = <img className="food_list_item__img" src={src_url} alt="" />

    const { addProduct, cartItems, increase, clearCart } = React.useContext(CartContext)

    const isInCart = (product: any) => {
        return !!cartItems.find((item: Food) => item.id === product.id);
    }

    const product: Food = food

    return (
        <div className="item" onClick={() => {onClicked(food.id)}}>
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
                        <button
                            onClick={() => increase(product)}
                            className="btn btn-outline-primary btn-sm">Add more</button>
                    }

                    {
                        !isInCart(product) &&
                        <button
                            onClick={() => addProduct(product)}
                            className="btn btn-primary btn-sm">Add to cart</button>
                    }

                    <button onClick={() => clearCart()}>Delete all</button>

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

    // const visible = useVisibleElements(
    //   { debounce: 10, ref: snapList },
    //   ([element]) => element,
    // );
    const goToSnapItem = useScroll({ ref: snapList });


    return (
        <SnapList ref={snapList} direction="vertical" className="list__container">

            {foodList.map((food, index) => {
                const url = { imgUrl: index + 1 }
                const Food = { ...url, ...food }
                return (
                    <SnapItem key={food.id} margin={{ top: '15px', bottom: '15px' }} snapAlign="center">
                        <MyItem food={Food} onClicked={() => {goToSnapItem(index)}}></MyItem>
                    </SnapItem>
                )
            })}
        </SnapList>
    );
}
