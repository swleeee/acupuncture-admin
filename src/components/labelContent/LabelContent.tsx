import React from 'react';

import * as S from './LabelContent.styled';

interface LabelContentProps {
  className?: string;
  children: React.ReactNode;
  isRequired?: boolean;
  id: string;
  label: string;
}

const LabelContent = ({
  className,
  children,
  isRequired,
  id,
  label,
}: LabelContentProps) => {
  return (
    <S.LabelContent className={className}>
      <S.Label htmlFor={id} isRequired={isRequired}>
        {label}
      </S.Label>
      {children}
    </S.LabelContent>
  );
};

export default LabelContent;
