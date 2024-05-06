import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const Section = styled.section`
  ${({ theme }) => css`
    border-radius: 8px;
    padding: 24px;
    background-color: ${theme.color.white};
    box-shadow: ${theme.boxShadow.SOFT};
  `}
`;

export const Title = styled.h4`
  ${({ theme }) => css`
    ${theme.font.semibold_18}
    margin-bottom: 14px;
    color: ${theme.color.gray_900};
  `}
`;

export const input = (width: number | '100%') => css`
  width: 100%;
  max-width: ${typeof width === 'number' ? `${width}px` : width};

  & > input {
    width: 100%;
  }
`;

export const IdWrapper = styled.div`
  display: flex;
  column-gap: 20px;
`;

export const DaySelectWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    column-gap: 15px;
    margin-bottom: 5px;

    & > span {
      ${theme.font.regular_14};
    }
  `}
`;

export const PhoneWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    column-gap: 10px;

    & > span {
      ${theme.font.regular_14};
      color: ${theme.color.gray_900};
    }
  `}
`;

export const AddressWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
`;

export const ZipCodeWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 20px;
`;

export const experience = css`
  height: 156px;
`;
