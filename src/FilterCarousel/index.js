import * as React from 'react';
import './index.css'

import { SnapList, SnapItem } from 'react-snaplist-carousel';

const MyItem = ({ children }) => (
    <div style={{ width: '50px', background: '#cccccc' }}>
        {children}
    </div>
);

export const FilterCarousel = () => (
    <SnapList className="fixed__top filter__list"  >
        <SnapItem margin={{ left: '0px', right: '15px' }} snapAlign="center">
            <MyItem>Item 0</MyItem>
        </SnapItem>
        <SnapItem margin={{ left: '15px', right: '15px' }} snapAlign="center">
            <MyItem>Item 1</MyItem>
        </SnapItem>
        <SnapItem margin={{ left: '15px', right: '15px' }} snapAlign="center">
            <MyItem>Item 2</MyItem>
        </SnapItem>
        <SnapItem margin={{ left: '15px', right: '15px' }} snapAlign="center">
            <MyItem>Item 3</MyItem>
        </SnapItem>
        <SnapItem margin={{ left: '15px', right: '15px' }} snapAlign="center">
            <MyItem>Item 4</MyItem>
        </SnapItem>
        <SnapItem margin={{ left: '15px', right: '15px' }} snapAlign="center">
            <MyItem>Item 4</MyItem>
        </SnapItem>
        <SnapItem margin={{ left: '15px', right: '15px' }} snapAlign="center">
            <MyItem>Item 4</MyItem>
        </SnapItem>
        <SnapItem margin={{ left: '15px', right: '15px' }} snapAlign="center">
            <MyItem>Item 4</MyItem>
        </SnapItem>
        <SnapItem margin={{ left: '15px', right: '15px' }} snapAlign="center">
            <MyItem>Item 4</MyItem>
        </SnapItem>
        <SnapItem margin={{ left: '15px', right: '15px' }} snapAlign="center">
            <MyItem>Item 4</MyItem>
        </SnapItem>
    </SnapList>
);