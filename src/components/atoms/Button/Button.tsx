import React, { ReactNode } from 'react'
import { StButton } from './Button.styles'

export interface ButtonProps {
    type?: 'primary' | 'outline' | 'text' | 'disabled'
    isInline?: boolean
    children?: ReactNode
    action: () => void
}

export const Button: React.FC<ButtonProps> = ({
    children = 'Button',
    type = 'primary',
    isInline = false,
    action,
}: ButtonProps) => (
    <StButton 
        type={type}
        onClick={action}
        inline={isInline}
    >
        { children }
    </StButton>
)
