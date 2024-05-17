import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const LabelContent = styled.div<{
  direction: 'horizontal' | 'vertical';
  marginBottom?: number;
}>`
  ${({ direction, marginBottom = 15 }) => css`
    display: grid;
    grid-auto-flow: ${direction === 'horizontal' ? 'column' : 'row'};
    grid-template-columns: ${direction === 'horizontal' && '195px 1fr'};
    grid-template-rows: ${direction === 'vertical' && '40px 1fr'};
    row-gap: ${direction === 'vertical' && '5px'};
    margin-bottom: ${marginBottom}px;
  `}
`;

interface LabelProps {
  isRequired?: boolean;
}

export const Label = styled.label<LabelProps>`
  ${({ theme, isRequired }) => css`
    ${theme.font.medium_14};
    position: relative;
    display: flex;
    align-items: center;
    height: 40px;
    color: ${theme.color.gray_900};

    &::after {
      content: '${isRequired ? '*' : ''}';
      margin-left: 2px;
      color: ${theme.color.red_200};
    }
  `}
`;
