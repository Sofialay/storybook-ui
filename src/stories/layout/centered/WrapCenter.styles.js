import styled from 'styled-components'
/* Trick to position center 😼 */ 
/* it needs to have a size */

/* There are 4 important ingredients for this trick to work:

- absolute positioning (position: absolute)
- equal distances from each edge (ideally 0px)
- a fixed size (defined width and height properties)
- hungry margins (margin: auto) */

export const WrapCenterPosition = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    border: 1px dotted palevioletred;
`


