import { useForm } from 'react-hook-form';

import {
  BIRTH_VIEW_OPTIONS,
  DAY_OPTIONS,
  MONTH_OPTIONS,
  YEAR_OPTIONS,
} from '@/constants';
import type {
  CountryCodeType,
  MutableOptionsType,
  SelectOptionType,
} from '@/types';

type Form = {
  name: string;
  id: string;
  password: string;
  passwordConfirm: string;
  birth: {
    year: SelectOptionType<typeof YEAR_OPTIONS> | null;
    month: SelectOptionType<typeof MONTH_OPTIONS> | null;
    day: SelectOptionType<typeof DAY_OPTIONS> | null;
    viewType: SelectOptionType<typeof BIRTH_VIEW_OPTIONS>;
  };
  phone: {
    code: CountryCodeType | null;
    first: string;
    middle: string;
    last: string;
  };
  address: {
    zipCode: string;
    default: string;
    detail: string;
  };
  job: string;
  recommender: string;
  experience: string;
};

const useUserRegisterForm = () => {
  const { watch, register, setValue } = useForm<Form>({
    mode: 'onTouched',
    defaultValues: {
      name: '',
      id: '',
      password: '',
      passwordConfirm: '',
      birth: {
        year: null,
        month: null,
        day: null,
        viewType: BIRTH_VIEW_OPTIONS[0],
      },
      phone: {
        code: null,
        first: '',
        middle: '',
        last: '',
      },
      address: {
        zipCode: '',
        default: '',
        detail: '',
      },
      job: '',
      recommender: '',
      experience: '',
    },
  });

  const handleDateOptionSelect =
    (key: 'birth.year' | 'birth.month' | 'birth.day') =>
    <T extends MutableOptionsType>(option: SelectOptionType<T>) => {
      setValue(key, option);
    };

  const handleBirthViewOptionSelect =
    (key: 'birth.viewType') =>
    (option: SelectOptionType<typeof BIRTH_VIEW_OPTIONS>) =>
    () => {
      setValue(key, option);
    };

  const handleCountryCodeSelect =
    (key: 'phone.code') => (option: CountryCodeType) => {
      setValue(key, option);
    };

  return {
    watch,
    register,
    handleDateOptionSelect,
    handleBirthViewOptionSelect,
    handleCountryCodeSelect,
  };
};

export default useUserRegisterForm;
