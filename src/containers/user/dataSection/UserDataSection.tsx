import React from 'react';

import UserListControlGroup from './controlGroup/UserListControlGroup';
import UserListTable from './table/UserListTable';

const UserDataSection = () => {
  return (
    <>
      <UserListControlGroup />
      <UserListTable />
    </>
  );
};

export default UserDataSection;
