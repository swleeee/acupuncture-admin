import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { Button, SearchInput, SegmentButton } from '@/components';
import { useOptionSelector } from '@/hooks';
import { getAllQuery } from '@/utils';
import DownloadIcon from '@/assets/icon/ic_download.svg?react';
import PlusIcon from '@/assets/icon/ic_plus.svg?react';
import CancelIcon from '@/assets/icon/ic_cross.svg?react';
import { PATH, USER_GROUP_FILTER_OPTIONS } from '@/constants';
import type { SelectOptionType } from '@/types';
import * as S from './UserListControlGroup.styled';

interface UserListControlGroup {
  checkedIds: string[];
}

const UserListControlGroup = ({ checkedIds }: UserListControlGroup) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const [, setSearchValue] = useState('');

  const handleUserSearch = (value: string) => (e: React.FormEvent) => {
    e.preventDefault();

    setSearchValue(value);
    setSearchParams({ ...getAllQuery(searchParams), search: value });
  };

  const { currentOption, changeOption } = useOptionSelector(
    USER_GROUP_FILTER_OPTIONS,
    true,
  );

  const handleOptionSelect =
    (option: SelectOptionType<typeof USER_GROUP_FILTER_OPTIONS>) => () => {
      changeOption(option);
      setSearchParams({ group: option.key });
    };

  const findGroupOptionByKey = (key: string) => {
    return USER_GROUP_FILTER_OPTIONS.find((option) => option.key === key);
  };

  const handleCheckedUserDelete = (checkedIds: string[]) => () => {
    if (confirm(`${checkedIds.length} 명의 회원을 모두 삭제하시겠습니까?`)) {
      alert('삭제 완료!');
    }
  };

  const handleRegisterNavigate = () => {
    navigate(PATH.userRegister);
  };

  useEffect(() => {
    const initialGroupKey = searchParams.get('group');
    const defaultGroupOption = USER_GROUP_FILTER_OPTIONS[0];

    const selectedGroup = initialGroupKey
      ? findGroupOptionByKey(initialGroupKey) ?? defaultGroupOption
      : defaultGroupOption;

    changeOption(selectedGroup);
  }, []);

  return (
    <S.ControlWrapper>
      <SegmentButton
        options={USER_GROUP_FILTER_OPTIONS}
        selectedOption={currentOption}
        onClick={handleOptionSelect}
      />
      <S.Wrapper>
        <SearchInput
          placeholder="이름, 아이디 검색"
          onSearch={handleUserSearch}
        />
        <S.ButtonWrapper>
          <Button
            icon={<CancelIcon css={S.cancelIcon} />}
            isDisabled={!checkedIds.length}
            label="회원 삭제"
            sizeType="sm"
            styleType="secondaryBlue"
            onClick={handleCheckedUserDelete(checkedIds)}
          />
          <Button
            icon={<DownloadIcon />}
            label="엑셀 다운로드"
            sizeType="sm"
            styleType="secondaryBlue"
          />
          <Button
            icon={<PlusIcon />}
            label="회원 등록"
            sizeType="sm"
            styleType="primaryBlue"
            onClick={handleRegisterNavigate}
          />
        </S.ButtonWrapper>
      </S.Wrapper>
    </S.ControlWrapper>
  );
};

export default UserListControlGroup;