import * as React from 'react';
import './index.css'
import { SnapList, SnapItem } from 'react-snaplist-carousel';
import testImg from '../assets/test2.jpeg'



const Image = <img className="food_list_item__img" src={testImg} alt="" />
const MyItem = ({ children }) => (
    <div className="item">
        {/* {children} */}
        {Image}
        <div className="menu__information">

            <div>
                <h1>Pizza des Pastas Sohn</h1>
                <p>Beschreibung des Gerichts</p>

            </div>


            <span>18,99 Euro</span>

        </div>

    </div>
);

export const FoodList = () => (
    <SnapList direction="vertical" className="list__container">
        <SnapItem margin={{ top: '15px', bottom: '15px' }} snapAlign="center">
            <MyItem>Item 0</MyItem>
        </SnapItem>
        <SnapItem margin={{ top: '15px', bottom: '15px' }} snapAlign="center">
            <MyItem>Item 0</MyItem>
        </SnapItem>
        <SnapItem margin={{ top: '15px', bottom: '15px' }} snapAlign="center">
            <MyItem>Item 0</MyItem>
        </SnapItem>
        <SnapItem margin={{ top: '15px', bottom: '15px' }} snapAlign="center">
            <MyItem>Item 0</MyItem>
        </SnapItem>
        <SnapItem margin={{ top: '15px', bottom: '15px' }} snapAlign="center">
            <MyItem>Item 0</MyItem>
        </SnapItem>
        <SnapItem margin={{ top: '15px', bottom: '15px' }} snapAlign="center">
            <MyItem>Item 0</MyItem>
        </SnapItem>
        <SnapItem margin={{ top: '15px', bottom: '15px' }} snapAlign="center">
            <MyItem>Item 0</MyItem>
        </SnapItem>
        <SnapItem margin={{ top: '15px', bottom: '15px' }} snapAlign="center">
            <MyItem>Item 0</MyItem>
        </SnapItem>
        <SnapItem margin={{ top: '15px', bottom: '15px' }} snapAlign="center">
            <MyItem>Item 0</MyItem>
        </SnapItem>
        <SnapItem margin={{ top: '15px', bottom: '15px' }} snapAlign="center">
            <MyItem>Item 0</MyItem>
        </SnapItem>
        <SnapItem margin={{ top: '15px', bottom: '15px' }} snapAlign="center">
            <MyItem>Item 0</MyItem>
        </SnapItem>
        <SnapItem margin={{ top: '15px', bottom: '15px' }} snapAlign="center">
            <MyItem>Item 0</MyItem>
        </SnapItem>
        <SnapItem margin={{ top: '15px', bottom: '15px' }} snapAlign="center">
            <MyItem>Item 0</MyItem>
        </SnapItem>
    </SnapList>
);