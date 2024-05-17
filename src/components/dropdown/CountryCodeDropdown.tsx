import React, { useRef, useState } from 'react';

import { useOnClickOutside } from '@/hooks';
import ExpandIcon from '@/assets/icon/ic_caret_down.svg?react';
import type { CountryCodeType } from '@/types';
import * as S from './Dropdown.styled';

interface CountryCodeDropdownProps {
  className?: string;
  options: CountryCodeType[];
  placeholder?: string;
  selectedOption: CountryCodeType | null;
  onSelect: (option: CountryCodeType) => void;
}

const CountryCodeDropdown = ({
  className,
  options,
  placeholder,
  selectedOption,
  onSelect,
}: CountryCodeDropdownProps) => {
  const dropdownRef = useRef(null);

  const [isOpen, setIsOpen] = useState(false);

  const handleOpenStateChange = (state: boolean) => () => {
    setIsOpen(state);
  };

  const handleOptionClick = (option: CountryCodeType) => () => {
    onSelect(option);
    setIsOpen(false);
  };

  useOnClickOutside(dropdownRef, handleOpenStateChange(false));

  return (
    <S.Dropdown className={className} ref={dropdownRef}>
      <S.DropdownToggleButton
        type="button"
        onClick={handleOpenStateChange(!isOpen)}
      >
        {selectedOption ? (
          <S.Label>{`${selectedOption.code} (+${selectedOption.dial})`}</S.Label>
        ) : (
          placeholder && <S.Placeholder>{placeholder}</S.Placeholder>
        )}
        <ExpandIcon css={S.controlIcon(isOpen)} />
      </S.DropdownToggleButton>
      {isOpen && (
        <S.DropdownOptionWrapper className="dropdown-menu">
          {options.map((option) => (
            <S.DropdownOption key={option.dial}>
              <S.OptionButton
                type="button"
                isSelected={option.dial === selectedOption?.dial}
                onClick={handleOptionClick(option)}
              >
                <span>{`${option.code} (+${option.dial})`}</span>
              </S.OptionButton>
            </S.DropdownOption>
          ))}
        </S.DropdownOptionWrapper>
      )}
    </S.Dropdown>
  );
};

export default CountryCodeDropdown;
