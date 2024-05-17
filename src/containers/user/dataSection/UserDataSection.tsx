import React, { useState } from 'react';

import type { GetUsersServerModel } from '@/types';
import UserListControlGroup from './controlGroup/UserListControlGroup';
import UserListTable from './table/UserListTable';

const UserDataSection = () => {
  const [checkedIds, setCheckIds] = useState<string[]>([]);

  const userData: GetUsersServerModel = {
    users: [
      {
        profile: null,
        name: '이용주',
        birth: '1993-04-01',
        id: 'qwer1234',
        createdDate: '2024-04-27',
        location: '서울특별시 종로구',
        group: '미지정 그룹',
        job: '무직',
        recommender: null,
      },
      {
        profile: null,
        name: '김나박이',
        birth: '1963-04-01',
        id: 'kse302011',
        createdDate: '2024-04-27',
        location: '전북특별자치도 군산시',
        group: '이침 지도자',
        job: '카페사장',
        recommender: '이용주',
      },
      {
        profile: null,
        name: '정서에스더',
        birth: '1963-12-01',
        id: 'pbrrio',
        createdDate: '2024-04-27',
        location: '세종특별자치시',
        group: '이침 전문가',
        job: '주부',
        recommender: '김종관회장님',
      },
    ],
  };

  const handleUserIdCheck = (id: string, isChecked: boolean) => {
    if (!isChecked) {
      setCheckIds([...checkedIds, id]);
      return;
    }
    setCheckIds([...checkedIds].filter((checkId) => checkId !== id));
  };

  const handleUserIdAllCheck = () => {
    if (!checkedIds.length) {
      setCheckIds(userData.users.map((user) => user.id));
      return;
    }

    setCheckIds([]);
  };

  return (
    <>
      <UserListControlGroup checkedIds={checkedIds} />
      <UserListTable
        checkedIds={checkedIds}
        userData={userData}
        handleUserIdCheck={handleUserIdCheck}
        handleUserIdAllCheck={handleUserIdAllCheck}
      />
    </>
  );
};

export default UserDataSection;
