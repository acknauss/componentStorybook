import * as React from 'react';
import styled, { css } from 'styled-components';
import { theme, getTheme } from '../theme/theme.js';

const Button = styled.button.attrs(props => ({
    type: props.type ? props.type : 'button',
  }))`
    padding: 0.75rem 0.9375rem;
    border-width: 2px;
    border-style: solid;
    border-radius: 3px;
    font-weight: 700;
    font-size: 1rem;
    line-height: 1;
    text-align: center;
    letter-spacing: 0.025rem;
    color: ${({ variant, color }) =>
        (variant == 'primary' && '#fff') || (variant == 'secondary' && theme[color]) || theme['mediumGray']};
    background-color: ${({ variant, color }) =>
        (variant == 'secondary' && '#fff') || theme[color] || theme['mediumGray']};
    border-color: ${({ color }) => (color && theme[color]) || theme['mediumGray']};
    min-width: ${({ size }) =>
        (size == 'small' && '148px') || (size == 'medium' && '190px;') || (size == 'large' && '220px')};
    ${({ noWrap }) =>
        noWrap &&
        css`
            display: inline-block;
            max-width: 100%;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        `};
    &:disabled {
        opacity: .7;
        background-color:${({ variant }) => (variant == 'primary' && theme['mediumGray']) || 'transparent'};
    }
    &:hover:not(:disabled) {
        color: white;
        cursor: pointer;
        background-color:${({ variant, color, hoverColor }) =>
            variant == 'primary' && hoverColor
                ? theme[hoverColor]
                : getTheme(variant, color) ||
                  (variant == 'primary' && theme['gray']) ||
                  (variant == 'secondary' && theme[color]) ||
                  theme['mediumGray']};
        border-color: ${({ variant, color, hoverColor }) =>
            variant == 'primary' && hoverColor
                ? theme[hoverColor]
                : getTheme(variant, color) ||
                  (variant == 'primary' && theme['gray']) ||
                  (variant == 'secondary' && theme[color]) ||
                  theme['mediumGray']};}
      }
    
`;


const StyledButton = ({ ...htmlProps }) => {
    return <Button {...htmlProps}></Button>;
};


export default StyledButton;