import React from 'react';

import * as S from './UserRegisterForm.styled';
import {
  Button,
  CountryCodeDropdown,
  Dropdown,
  Input,
  LabelContent,
  RadioButton,
  Textarea,
} from '@/components';
import {
  BIRTH_VIEW_OPTIONS,
  COUNTRY_CODE_OPTIONS,
  MONTH_OPTIONS,
  YEAR_OPTIONS,
} from '@/constants';
import useUserRegisterForm from './hooks/useUserRegisterForm';

const UserRegisterForm = () => {
  const {
    watch,
    register,
    handleDateOptionSelect,
    handleBirthViewOptionSelect,
    handleCountryCodeSelect,
  } = useUserRegisterForm();

  return (
    <S.Section>
      <S.Title>기본정보 입력</S.Title>
      <div>
        <LabelContent id="name" label="이름">
          <Input
            css={S.input(300)}
            placeholder="실명으로 입력해주세요."
            value={watch('name')}
            register={register('name', {
              required: true,
            })}
          />
        </LabelContent>
        <LabelContent id="id" label="회원아이디">
          <S.IdWrapper>
            <Input
              css={S.input(300)}
              placeholder="6 ~ 12자 영문(대소문자 미구분) + 숫자만 허용"
              value={watch('id')}
              register={register('id', {
                required: true,
              })}
            />
            <Button
              sizeType="sm"
              styleType="primaryBlue"
              label="중복확인"
              onClick={() => {}} // TODO: 추후 작성 예정
            />
          </S.IdWrapper>
        </LabelContent>
        <LabelContent id="password" label="비밀번호">
          <Input
            css={S.input(300)}
            placeholder="6 ~ 16자 대소문자 영문 + 숫자 + 특수문자"
            value={watch('password')}
            register={register('password', {
              required: true,
            })}
          />
        </LabelContent>
        <LabelContent id="passwordConfirm" label="비밀번호 확인">
          <Input
            css={S.input(300)}
            placeholder="6 ~ 16자 대소문자 영문 + 숫자 + 특수문자"
            value={watch('passwordConfirm')}
            register={register('passwordConfirm', {
              required: true,
            })}
          />
        </LabelContent>
        <LabelContent id="birth" label="생년월일">
          <div>
            <S.DaySelectWrapper>
              <Dropdown
                options={YEAR_OPTIONS}
                selectedOption={watch('birth.year')}
                placeholder="0000"
                onSelect={handleDateOptionSelect('birth.year')}
              />
              <span>년</span>
              <Dropdown
                options={MONTH_OPTIONS}
                selectedOption={watch('birth.month')}
                placeholder="00"
                onSelect={handleDateOptionSelect('birth.month')}
              />
              <span>월</span>
              <Input
                css={S.input(41)}
                placeholder="00"
                value={watch('birth.day')}
                register={register('birth.day', {
                  required: true,
                  maxLength: 2,
                })}
              />
              <span>일</span>
            </S.DaySelectWrapper>
            <RadioButton
              options={BIRTH_VIEW_OPTIONS}
              selectedOption={watch('birth.viewType')}
              onSelect={handleBirthViewOptionSelect('birth.viewType')}
            />
          </div>
        </LabelContent>
        <LabelContent id="phone" label="전화번호">
          <S.PhoneWrapper>
            <CountryCodeDropdown
              options={COUNTRY_CODE_OPTIONS}
              placeholder="KOR (+82)"
              selectedOption={watch('phone.code')}
              onSelect={handleCountryCodeSelect('phone.code')}
            />
            <Input
              css={S.input(50)}
              placeholder="000"
              value={watch('phone.first')}
              register={register('phone.first', {
                required: true,
              })}
            />
            <span>-</span>
            <Input
              css={S.input(59)}
              placeholder="000"
              value={watch('phone.middle')}
              register={register('phone.middle', {
                required: true,
              })}
            />
            <span>-</span>
            <Input
              css={S.input(59)}
              placeholder="000"
              value={watch('phone.last')}
              register={register('phone.last', {
                required: true,
              })}
            />
          </S.PhoneWrapper>
        </LabelContent>
        <LabelContent id="address" label="주소">
          <S.AddressWrapper>
            <S.ZipCodeWrapper>
              <Input
                css={S.input(100)}
                placeholder="우편번호"
                value={watch('address.zipCode')}
                register={register('address.zipCode', {
                  required: true,
                })}
              />
              <Button
                label="우편번호 찾기"
                sizeType="sm"
                styleType="primaryBlue"
                onClick={() => {}} // TODO: 추후 작성 예정
              />
            </S.ZipCodeWrapper>
            <Input
              css={S.input('100%')}
              placeholder="기본주소 입력"
              value={watch('address.default')}
              register={register('address.default', {
                required: true,
              })}
            />
            <Input
              css={S.input('100%')}
              placeholder="상세주소 입력"
              value={watch('address.detail')}
              register={register('address.detail')}
            />
          </S.AddressWrapper>
        </LabelContent>
        <LabelContent id="job" label="직업">
          <Input
            css={S.input(500)}
            placeholder="현재 하시는 일을 적어주세요. (예. 카페 사장, 교수, 주부 등)"
            value={watch('job')}
            register={register('job')}
          />
        </LabelContent>
        <LabelContent id="recommender" label="추천인">
          <Input
            css={S.input(300)}
            placeholder="추천인을 적어주세요."
            value={watch('recommender')}
            register={register('recommender')}
          />
        </LabelContent>
        <LabelContent
          direction="vertical"
          marginBottom={0}
          id="experience"
          label="이침 경험에 대한 나눔"
        >
          <Textarea
            css={S.experience}
            id="experience"
            maxLength={300}
            placeholder="이침에 대한 경험과 추억을 나누어주세요. (이침 체험, 이혈 공부, 지도해본 적 있는 지 등)"
            register={register('experience')}
          />
        </LabelContent>
      </div>
    </S.Section>
  );
};

export default UserRegisterForm;
