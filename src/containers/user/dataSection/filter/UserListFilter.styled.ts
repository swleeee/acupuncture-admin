import styled from '@emotion/styled';
import { Theme, css } from '@emotion/react';

export const ControlWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const Wrapper = styled.div`
  display: flex;
  column-gap: 16px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  column-gap: 16px;
`;

export const cancelIcon = (theme: Theme) => css`
  & > g > path {
    fill: ${theme.color.blue_500};
  }
`;
