import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const LabelContent = styled.div`
  display: grid;
  grid-template-columns: 195px 1fr;
  margin-bottom: 15px;
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
    color: ${theme.color.gray_900};

    &::after {
      content: '${isRequired ? '*' : ''}';
      margin-left: 2px;
      color: ${theme.color.red_10};
    }
  `}
`;
