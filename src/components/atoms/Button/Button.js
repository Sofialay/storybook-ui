import React from 'react'
import { StButton } from './Button.styles'

export const Button = ({
    children,
    color = 'primary',
    size = 'medium',
    action,
}) => (
    <StButton 
        size={size}
        bgColor={color}
        onClick={action}
    >
        { children }
    </StButton>
)

export default Button
