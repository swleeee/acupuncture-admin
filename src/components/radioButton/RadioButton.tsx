import React from 'react';

import type { ImmutableOptionsType, SelectOptionType } from '@/types';
import * as S from './RadioButton.styled';

interface RadioButtonProps<T extends ImmutableOptionsType> {
  options: ReadonlyArray<SelectOptionType<T>>;
  selectedOption: SelectOptionType<T>;
  onSelect: (option: SelectOptionType<T>) => () => void;
}

const RadioButton = <T extends ImmutableOptionsType>({
  options,
  selectedOption,
  onSelect,
}: RadioButtonProps<T>) => {
  return (
    <S.RadioButtonGroup>
      {options.map((option) => (
        <S.Container key={option.key}>
          <S.Input
            type="radio"
            id={option.key}
            value={option.key}
            checked={selectedOption.key === option.key}
            onChange={onSelect(option)}
          />
          <S.Label htmlFor={option.key}>{option.label}</S.Label>
        </S.Container>
      ))}
    </S.RadioButtonGroup>
  );
};

export default RadioButton;
