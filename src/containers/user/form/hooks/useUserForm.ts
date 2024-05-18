import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import {
  BIRTH_VIEW_OPTIONS,
  ERROR_MESSAGE,
  MONTH_OPTIONS,
  YEAR_OPTIONS,
} from '@/constants';
import type {
  CountryCodeType,
  MutableOptionsType,
  SelectOptionType,
} from '@/types';
import { useEffect } from 'react';

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

const useUserForm = () => {
  const { id } = useParams();

  const FORM_INIT_VALUE = {
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
  };

  const {
    formState: { errors },
    watch,
    register,
    clearErrors,
    setError,
    setValue,
    reset,
    handleSubmit,
  } = useForm<Form>({
    mode: 'onTouched',
    defaultValues: FORM_INIT_VALUE,
  });

  const checkRequiredError = (data: Form) => {
    let hasError = false;

    if (!data.phone.code) {
      setError('phone.code', {
        type: 'required',
        message: ERROR_MESSAGE.REQUIRED,
      });
      hasError = true;
    }

    return hasError;
  };

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
      clearErrors(key);
    };

  const handleAddressSearch = (zipCode: string, address: string) => {
    setValue('address.zipCode', zipCode);
    setValue('address.default', address);
  };

  const handleUserCreate = handleSubmit(
    (data) => {
      const hasError = checkRequiredError(data);
      if (hasError) return;
    },
    () => {
      checkRequiredError(watch());
    },
  );

  const handleUserUpdate = handleSubmit(
    (data) => {
      const hasError = checkRequiredError(data);
      if (hasError) return;
    },
    () => {
      checkRequiredError(watch());
    },
  );

  useEffect(() => {
    // TODO: 추후 API 연동 시 로직 수정 필요
    if (!id) return;

    reset({
      ...FORM_INIT_VALUE,
      name: '이상원',
      id: 'test001',
      phone: {
        code: { code: 'KOR', dial: '82' },
        first: '010',
        middle: '1111',
        last: '2222,',
      },
      address: {
        zipCode: '01404',
        default: '서울 성북구',
        detail: '1층',
      },
    });
  }, []);

  return {
    errors,
    watch,
    register,
    handleDateOptionSelect,
    handleBirthViewOptionSelect,
    handleCountryCodeSelect,
    handleAddressSearch,
    handleUserCreate,
    handleUserUpdate,
  };
};

export default useUserForm;
