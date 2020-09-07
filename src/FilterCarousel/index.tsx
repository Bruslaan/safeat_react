import * as React from 'react';
import './index.css'

import { SnapList, SnapItem } from 'react-snaplist-carousel';



interface FilterProps {
    name?: String
    icon?: String
}

// const Icon = <img className="filter__img" src={icon} alt="" />
const MyItem: React.FC<FilterProps> = ({ name }) => (
    <div className="filter__item">
        {/* {children} */}
        <div className="icon__name">
            {/* {Icon} */}
            <p>{name}</p>
        </div>


    </div>
);

interface FilterListProps {
    filterList: Array<FilterProps>
}

export const FilterCarousel: React.FC<FilterListProps> = ({ filterList }) => (

    <SnapList direction="horizontal" className="fixed__top filter__list"  >
        <SnapItem key={0} margin={{ left: '0px', right: '15px' }} snapAlign="center">
            <MyItem name="Alle" ></MyItem>
        </SnapItem>
        {filterList.map((filterItem, index) => {
            return (
                <SnapItem key={index+1} margin={{ left: '0px', right: '15px' }} snapAlign="center">
                    <MyItem name={filterItem.name} ></MyItem>
                </SnapItem>
            )
        })}
    </SnapList>


);