import React from 'react';

import { Breadcrumbs } from '@/components';
import { USER_LIST_BREADCRUMBS } from '@/constants';
import UserDataSection from './dataSection/UserDataSection';
import * as S from './UserList.styled';

const UserList = () => {
  return (
    <S.UserList>
      <S.Outline>
        <div>
          <S.Title>회원 리스트</S.Title>
          <Breadcrumbs items={USER_LIST_BREADCRUMBS} />
        </div>
      </S.Outline>
      <UserDataSection />
    </S.UserList>
  );
};

export default UserList;
