import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const TextareaWrapper = styled.div`
  position: relative;
`;

export const Textarea = styled.textarea<{ hasError?: boolean }>`
  ${({ theme, hasError }) => css`
    ${theme.font.regular_14};
    width: 100%;
    height: 100%;
    border: 1px solid ${hasError ? theme.color.red_200 : theme.color.gray_100};
    border-radius: 8px;
    padding: 7px 11px;
    color: ${theme.color.black};
    background-color: ${theme.color.gray_50};
  `}
`;
