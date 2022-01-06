import styled, { css } from 'styled-components'
import '../../styles/theme.css'

export const StButton = styled.button`
    ${({ bgColor }) => bgColor === 'primary' && css`
        background-color: var(--color-primary);
        color: var(--color-base-white);
    `};
    width: ${({ size }) => {
        if (size === 'small') {
            return '150px'
        } else if (size === 'medium') {
            return '200px'
        } else if (size === 'large') {
            return '250px'
        } else if (size === 'full') {
            return '100%'
        }
    }};
    height: 40px;
    border: var(--color-base-transparent);
    border-radius: var(--border-radius-lg);
    font-size: var(--fs-300);
    font-weight: var(--font-weight-semibold);
    letter-spacing: var(--letter-spacing-wide);
    cursor: pointer;
`