import React from 'react';

import { Breadcrumbs } from '@/components';
import { USER_EDIT_BREADCRUMBS } from '@/constants';
import UserForm from '../form/UserForm';
import * as S from './UserEdit.styled';

const UserEdit = () => {
  return (
    <S.UserEdit>
      <S.Outline>
        <div>
          <S.Title>회원 수정</S.Title>
          <Breadcrumbs items={USER_EDIT_BREADCRUMBS} />
        </div>
      </S.Outline>
      <UserForm />
    </S.UserEdit>
  );
};

export default UserEdit;
