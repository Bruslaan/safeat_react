import * as React from 'react';
import './index.css'

import { SnapList, SnapItem } from 'react-snaplist-carousel';



interface FilterProps {
    name?: String
    icon?: String
    active?: boolean
}


interface FilterListProps {
    filterList: Array<FilterProps>
    onActiveChange: (index: number) => void
}

export const FilterCarousel: React.FC<FilterListProps> = ({ filterList, onActiveChange }) => {

    const [activeTab, setactiveTab] = React.useState(-1)
    const emmitChange: any = (index: number) => {
        setactiveTab(index)
        onActiveChange(index)
    }

    return (
        <SnapList direction="horizontal" className="fixed__top filter__list"  >
            <SnapItem key={-1} margin={{ left: '0px', right: '15px' }} snapAlign="center">
                <div className="filter__item " onClick={() => emmitChange(-1)}>
                    {/* {children} */}
                    <div className="icon__name">
                        {/* {Icon} */}
                        <p unselectable="on" className={`${activeTab === -1 ? "active" : ""}`}>{"Alle"}</p>
                    </div>
                </div>
            </SnapItem>
            {filterList.map((filterItem, index) => {
                return (
                    <SnapItem key={index} margin={{ left: '0px', right: '15px' }} snapAlign="center">
                        <div className="filter__item " onClick={() => emmitChange(index)}>
                            {/* {children} */}
                            <div className="icon__name">
                                {/* {Icon} */}
                                <p unselectable="on" className={`${activeTab === index ? "active" : ""}`}>{filterItem.name}</p>
                            </div>
                        </div>
                    </SnapItem>
                )
            })}
        </SnapList>


    )
};