import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const ErrorMessage = styled.p`
  ${({ theme }) => css`
    ${theme.font.semibold_12}
    color: ${theme.color.red_200};
  `}
`;
