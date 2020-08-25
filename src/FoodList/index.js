import * as React from 'react';
import './index.css'
import { SnapList, SnapItem } from 'react-snaplist-carousel';

const MyItem = ({ children }) => (
    <div className="item">
        {/* {children} */}
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