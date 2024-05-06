import React from 'react';

import * as S from './LabelContent.styled';

interface LabelContentProps {
  className?: string;
  children: React.ReactNode;
  isRequired?: boolean;
  direction?: 'horizontal' | 'vertical';
  marginBottom?: number;
  id: string;
  label: string;
}

const LabelContent = ({
  className,
  children,
  isRequired,
  direction = 'horizontal',
  marginBottom,
  id,
  label,
}: LabelContentProps) => {
  return (
    <S.LabelContent
      className={className}
      direction={direction}
      marginBottom={marginBottom}
    >
      <S.Label htmlFor={id} isRequired={isRequired}>
        {label}
      </S.Label>
      {children}
    </S.LabelContent>
  );
};

export default LabelContent;
