import * as React from 'react';

import { SnapList, SnapItem } from 'react-snaplist-carousel';

const MyItem = ({ children }) => (
    <div style={{ width: '100vw', height: "200px", background: '#cccccc' }}>
        {children}
    </div>
);

export const FoodList = () => (
    <SnapList direction="vertical" >
        <SnapItem margin={{ top: '15px', bottom: '15px' }} snapAlign="center">
            <MyItem>Item 0</MyItem>
        </SnapItem>
        <SnapItem margin={{ top: '15px', bottom: '15px' }} snapAlign="center">
            <MyItem>Item 1</MyItem>
        </SnapItem>
        <SnapItem margin={{ top: '15px', bottom: '15px' }} snapAlign="center">
            <MyItem>Item 2</MyItem>
        </SnapItem>
        <SnapItem margin={{ top: '15px', bottom: '15px' }} snapAlign="center">
            <MyItem>Item 3</MyItem>
        </SnapItem>
        <SnapItem margin={{ top: '15px', bottom: '15px' }} snapAlign="center">
            <MyItem>Item 4</MyItem>
        </SnapItem>
        <SnapItem margin={{ top: '15px', bottom: '15px' }} snapAlign="center">
            <MyItem>Item 4</MyItem>
        </SnapItem>
        <SnapItem margin={{ top: '15px', bottom: '15px' }} snapAlign="center">
            <MyItem>Item 4</MyItem>
        </SnapItem>
        <SnapItem margin={{ top: '15px', bottom: '15px' }} snapAlign="center">
            <MyItem>Item 4</MyItem>
        </SnapItem>
        <SnapItem margin={{ top: '15px', bottom: '15px' }} snapAlign="center">
            <MyItem>Item 4</MyItem>
        </SnapItem>
        <SnapItem margin={{ top: '15px', bottom: '15px' }} snapAlign="center">
            <MyItem>Item 4</MyItem>
        </SnapItem>
    </SnapList>
);