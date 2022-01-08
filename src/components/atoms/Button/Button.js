import React from 'react'
import { StButton } from './Button.styles'

export const Button = ({
    children,
    type = 'primary',
    isInline = false,
    action,
}) => (
    <StButton 
        type={type}
        onClick={action}
        inline={isInline}
    >
        { children }
    </StButton>
)

export default Button
