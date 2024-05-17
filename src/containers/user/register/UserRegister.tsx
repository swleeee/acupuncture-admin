import React from 'react';

import { Breadcrumbs, Button } from '@/components';
import CancelIcon from '@/assets/icon/ic_cross.svg?react';
import RegisterIcon from '@/assets/icon/ic_plus.svg?react';
import { USER_REGISTER_BREADCRUMBS } from '@/constants';
import UserRegisterForm from './form/UserRegisterForm';
import * as S from './UserRegister.styled';

const UserRegister = () => {
  return (
    <S.UserRegister>
      <S.Outline>
        <div>
          <S.Title>회원 등록</S.Title>
          <Breadcrumbs items={USER_REGISTER_BREADCRUMBS} />
        </div>
      </S.Outline>
      <S.ButtonWrapper>
        <Button
          icon={<CancelIcon />}
          label="취소"
          sizeType="sm"
          styleType="secondaryGray"
        />
        <Button
          icon={<RegisterIcon />}
          label="회원 등록"
          sizeType="sm"
          styleType="primaryBlue"
        />
      </S.ButtonWrapper>
      <UserRegisterForm />
    </S.UserRegister>
  );
};

export default UserRegister;
