import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const Dropdown = styled.div`
  position: relative;
`;

export const DropdownToggleButton = styled.button<{ hasError?: boolean }>`
  ${({ theme, hasError }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 8px;
    border: 1px solid ${hasError ? theme.color.red_200 : theme.color.gray_100};
    border-radius: 8px;
    padding: 9px 11px;
    background-color: ${theme.color.gray_50};
  `}
`;

export const Label = styled.span`
  ${({ theme }) => css`
    ${theme.font.regular_14};
    color: ${theme.color.gray_900};
  `}
`;

export const Placeholder = styled.span`
  ${({ theme }) => css`
    ${theme.font.regular_14};
    color: ${theme.color.gray_300};
  `}
`;

export const controlIcon = (isOpen: boolean) => css`
  width: 20px;
  height: 20px;
  transform: rotate(${isOpen ? '180deg' : '0deg'});
`;

export const DropdownOptionWrapper = styled.ul`
  ${({ theme }) => css`
    ${theme.style.HORIZONTAL_SCROLL_BAR}
    position: absolute;
    top: calc(100% + 4px);
    width: 100%;
    max-height: 200px;
    border: 1px solid ${theme.color.gray_300};
    border-radius: 8px;
    background-color: ${theme.color.white};
    z-index: ${theme.zIndex.DROPDOWN};
  `}
`;

export const DropdownOption = styled.li`
  ${({ theme }) => css`
    &:hover > button > span {
      color: ${theme.color.blue_500};
    }
  `}
`;

export const OptionButton = styled.button<{ isSelected: boolean }>`
  ${({ theme, isSelected }) => css`
    display: flex;
    width: 100%;
    height: 100%;
    padding: 8px 10px;

    & > span {
      ${theme.font.regular_14};
      color: ${isSelected && theme.color.blue_500};
    }
  `}
`;
