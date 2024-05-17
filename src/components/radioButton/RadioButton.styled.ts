import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const RadioButtonGroup = styled.div`
  display: flex;
  column-gap: 15px;
`;

export const Container = styled.span`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    cursor: pointer;

    &:hover > input[type='radio']:not(:checked) {
      border-color: ${theme.color.blue_500};
    }
  `}
`;

export const Label = styled.label`
  ${({ theme }) => css`
    ${theme.font.regular_14};
    padding-left: 5px;
    color: ${theme.color.gray_900};
    cursor: pointer;
  `}
`;

export const Input = styled.input`
  ${({ theme }) => css`
    &[type='radio'] {
      width: 18px;
      height: 18px;
      border: 1px solid ${theme.color.gray_200};
      border-radius: 50%;
      cursor: pointer;

      &:checked {
        border: 2px solid ${theme.color.white};
        background-color: ${theme.color.blue_500};
        box-shadow: ${theme.boxShadow.RADIO_BUTTON};
      }
    }
  `}
`;
