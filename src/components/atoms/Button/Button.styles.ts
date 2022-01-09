import styled, { css } from 'styled-components'
import '../../styles/theme.css'

export const StButton = styled.button`
    border: var(--color-base-transparent);
    color: var(--color-primary);
    width: 100%;
    max-width: ${({ inline }) => inline && 'fit-content'};
    ${({ type }) => {
        if (type === 'disabled') {
            return css`color: var(--color-font-muted);`
        }
        else if (type === 'outline') {
            return css`
                background: var(--color-base-white);
                border: 2px solid var(--color-primary);
            `
        }
        else if (type === 'primary') {
            return css`
                color: var(--color-font-inverted);
                background: var(--color-primary);
            `
        }
        else if (type === 'text') {
            return css`
                background: var(--color-base-transparent);
                text-decoration: underline;
            `
        }
    }}
    height: 40px;
    border-radius: var(--border-radius-lg);
    font-size: var(--fs-300);
    font-weight: var(--font-weight-semibold);
    letter-spacing: var(--letter-spacing-wide);
    cursor: pointer;
`