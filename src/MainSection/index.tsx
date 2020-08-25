import React, { ReactNode } from 'react'

import './index.css'


interface Props {
    leftItems?: Array<ReactNode>
    rightItems?: Array<ReactNode>
}

export const MainSection: React.FC<Props> = (props: Props) => {

    return (
        <div className="main__container">
            <div className="left__section">
                {props.leftItems?.map(item => item)}

            </div>
            <div className="right__section disable_on_small">
                {props.rightItems?.map(item => item)}
            </div>
        </div>

    )
}
