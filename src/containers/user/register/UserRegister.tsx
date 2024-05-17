import React from 'react';

import { Breadcrumbs } from '@/components';
import { USER_REGISTER_BREADCRUMBS } from '@/constants';
import UserForm from '../form/UserForm';
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
      <UserForm />
    </S.UserRegister>
  );
};

export default UserRegister;
