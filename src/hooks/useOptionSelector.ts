import { useState } from 'react';

import type {
  ImmutableOptionsType,
  MutableOptionsType,
  SelectOptionType,
} from '@/types';

export const useOptionSelector = <
  T extends MutableOptionsType | ImmutableOptionsType,
>(
  options: T,
  hasInit = false,
) => {
  const [currentOption, setCurrentOption] =
    useState<SelectOptionType<T> | null>(hasInit ? options[0] : null);

  const changeOption = (option: SelectOptionType<T>) => {
    setCurrentOption(option);
  };

  return { currentOption, changeOption };
};
