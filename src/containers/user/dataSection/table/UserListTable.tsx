import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Checkbox, Table } from '@/components';
import PencelIcon from '@/assets/icon/ic_pencil.svg?react';
import TrashIcon from '@/assets/icon/ic_trash.svg?react';
import { PATH, USER_TABLE_HEADER } from '@/constants';
import type { GetUsersServerModel } from '@/types';
import * as S from './UserListTable.styled';

interface UserListTableProps {
  checkedIds: string[];
  userData: GetUsersServerModel;
  handleUserIdCheck: (id: string, isChecked: boolean) => void;
  handleUserIdAllCheck: () => void;
}

const UserListTable = ({
  checkedIds,
  userData,
  handleUserIdCheck,
  handleUserIdAllCheck,
}: UserListTableProps) => {
  const navigate = useNavigate();

  const handleEditButtonClick = (id: string) => () => {
    navigate(`${PATH.userEdit}/${id}`);
  };

  const handleDeleteButtonClick = (id: string, name: string) => () => {
    if (confirm(`${name} 회원을 삭제하시겠습니까?`)) {
      alert(`${id} 삭제 완료!`);
    }
  };

  const formatData = (
    item: GetUsersServerModel['users'][number],
    key: keyof typeof USER_TABLE_HEADER,
  ) => {
    switch (key) {
      case 'name': {
        return (
          <S.UserInfoWrapper>
            <S.DummyProfile />
            <div>
              <S.Name>{item[key]}</S.Name>
              <S.Birth>{item.birth}</S.Birth>
            </div>
          </S.UserInfoWrapper>
        );
      }

      case 'id':
        return <S.Id>{item[key]}</S.Id>;

      case 'createdDate':
        return <S.CreatedDate>{item[key]}</S.CreatedDate>;

      case 'location':
        return <S.Location>{item[key]}</S.Location>;

      case 'group':
        return <S.Group>{item[key]}</S.Group>;

      case 'job':
        return <S.Job>{item[key]}</S.Job>;

      case 'recommender':
        return <S.Recommender>{item[key] ?? '(비어 있음)'}</S.Recommender>;

      case '':
        return (
          <S.ManagementWrapper>
            <S.ControlButton
              type="button"
              aria-label="유저 정보 수정"
              onClick={handleEditButtonClick(item.id)}
            >
              <PencelIcon />
            </S.ControlButton>
            <S.ControlButton
              type="button"
              aria-label="유저 정보 삭제"
              onClick={handleDeleteButtonClick(item.id, item.name)}
            >
              <TrashIcon />
            </S.ControlButton>
          </S.ManagementWrapper>
        );

      default:
        return item[key];
    }
  };

  return (
    <S.UserListTableCollection>
      <Table
        css={S.table}
        isCheckedAll={!!checkedIds.length}
        onSelectAll={handleUserIdAllCheck}
        captionContent="Member Management"
        headers={USER_TABLE_HEADER}
      >
        <>
          <Table.Body>
            {userData.users.map((user) => (
              <Table.BodyRow
                key={user.id}
                isSelected={checkedIds.includes(user.id)}
              >
                {Object.keys(USER_TABLE_HEADER).map((key, i) => (
                  <Table.Data key={key} hasCheckbox={i === 0}>
                    {i === 0 && (
                      <Checkbox
                        isChecked={checkedIds.includes(user.id)}
                        id={user.id}
                        onItemSelect={handleUserIdCheck}
                      />
                    )}
                    {user &&
                      formatData(user, key as keyof typeof USER_TABLE_HEADER)}
                  </Table.Data>
                ))}
              </Table.BodyRow>
            ))}
          </Table.Body>
          <Table.Foot>
            <Table.TotalCount />
            <Table.Pagination totalPages={11} />
          </Table.Foot>
        </>
      </Table>
    </S.UserListTableCollection>
  );
};

export default UserListTable;
