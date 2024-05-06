import React from 'react';
import type { UseFormRegisterReturn } from 'react-hook-form';

import * as S from './Textarea.styled';

interface TextareaProps {
  className?: string;
  hasError?: boolean;
  id: string;
  maxLength: number;
  placeholder: string;
  register: UseFormRegisterReturn;
}

const Textarea = ({
  className,
  hasError,
  id,
  maxLength,
  placeholder,
  register,
}: TextareaProps) => (
  <S.TextareaWrapper>
    <S.Textarea
      className={className}
      hasError={hasError}
      id={id}
      maxLength={maxLength}
      placeholder={placeholder}
      {...register}
    />
  </S.TextareaWrapper>
);

export default Textarea;
