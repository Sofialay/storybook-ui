import React, { Children } from 'react'
import { WrapCenterPosition } from './WrapCenter.styles'

export const WrapCenter = ({ width, height }) => {

    return (
        <WrapCenterPosition 
            width={width} 
            height={height}
        >
            {Children}
        </WrapCenterPosition>
    )

}
