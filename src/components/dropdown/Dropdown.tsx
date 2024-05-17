import React, { useRef, useState } from 'react';

import { useOnClickOutside } from '@/hooks';
import ExpandIcon from '@/assets/icon/ic_caret_down.svg?react';
import type { ImmutableOptionsType, SelectOptionType } from '@/types';
import * as S from './Dropdown.styled';

interface DropdownProps<T extends ImmutableOptionsType> {
  className?: string;
  hasError?: boolean;
  options: ReadonlyArray<SelectOptionType<T>>;
  placeholder?: string;
  selectedOption: SelectOptionType<T> | null;
  onSelect: (option: SelectOptionType<T>) => void;
}

const Dropdown = <T extends ImmutableOptionsType>({
  className,
  hasError,
  options,
  placeholder,
  selectedOption,
  onSelect,
}: DropdownProps<T>) => {
  const dropdownRef = useRef(null);

  const [isOpen, setIsOpen] = useState(false);

  const handleOpenStateChange = (state: boolean) => () => {
    setIsOpen(state);
  };

  const handleOptionClick = (option: SelectOptionType<T>) => () => {
    onSelect(option);
    setIsOpen(false);
  };

  useOnClickOutside(dropdownRef, handleOpenStateChange(false));

  return (
    <S.Dropdown className={className} ref={dropdownRef}>
      <S.DropdownToggleButton
        type="button"
        hasError={hasError}
        onClick={handleOpenStateChange(!isOpen)}
      >
        {selectedOption ? (
          <S.Label>{selectedOption.label}</S.Label>
        ) : (
          placeholder && <S.Placeholder>{placeholder}</S.Placeholder>
        )}
        <ExpandIcon css={S.controlIcon(isOpen)} />
      </S.DropdownToggleButton>
      {isOpen && (
        <S.DropdownOptionWrapper className="dropdown-menu">
          {options.map((option) => (
            <S.DropdownOption key={option.key}>
              <S.OptionButton
                type="button"
                isSelected={option.key === selectedOption?.key}
                onClick={handleOptionClick(option)}
              >
                <span>{option.label}</span>
              </S.OptionButton>
            </S.DropdownOption>
          ))}
        </S.DropdownOptionWrapper>
      )}
    </S.Dropdown>
  );
};

export default Dropdown;
