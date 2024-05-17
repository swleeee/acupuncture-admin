import React from 'react';

import { ErrorMessage } from '@/components';
import * as S from './LabelContent.styled';

interface LabelContentProps {
  className?: string;
  children: React.ReactNode;
  isRequired?: boolean;
  direction?: 'horizontal' | 'vertical';
  errorMessage?: string;
  marginBottom?: number;
  id: string;
  label: string;
}

const LabelContent = ({
  className,
  children,
  isRequired,
  direction = 'horizontal',
  errorMessage,
  marginBottom,
  id,
  label,
}: LabelContentProps) => {
  return (
    <>
      <S.LabelContent
        className={className}
        direction={direction}
        marginBottom={marginBottom}
      >
        <S.Label htmlFor={id} isRequired={isRequired}>
          {label}
        </S.Label>
        <div>
          {children}
          {errorMessage && (
            <ErrorMessage css={S.message} message={errorMessage} />
          )}
        </div>
      </S.LabelContent>
    </>
  );
};

export default LabelContent;
