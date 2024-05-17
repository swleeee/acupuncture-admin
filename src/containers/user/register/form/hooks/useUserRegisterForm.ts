import { useForm } from 'react-hook-form';

import { BIRTH_VIEW_OPTIONS, MONTH_OPTIONS, YEAR_OPTIONS } from '@/constants';
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
    day: string;
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
        day: '',
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
    (key: 'birth.year' | 'birth.month') =>
    <T extends MutableOptionsType>(option: SelectOptionType<T>) => {
      setValue(key, option);
      setValue('birth.day', '');
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

  const handleAddressSearch = (zipCode: string, address: string) => {
    setValue('address.zipCode', zipCode);
    setValue('address.default', address);
  };

  return {
    watch,
    register,
    handleDateOptionSelect,
    handleBirthViewOptionSelect,
    handleCountryCodeSelect,
    handleAddressSearch,
  };
};

export default useUserRegisterForm;
