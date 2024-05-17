import { generateDescendingOptionsFromRange } from '@/utils';

export const USER_GROUP_FILTER_OPTIONS = [
  { key: 'all', label: '전체회원' },
  { key: 'unspecified', label: '미지정 그룹' },
  { key: 'inexperienced', label: '이침 미경험자' },
  { key: 'expert', label: '이침 전문가' },
  { key: 'business', label: '사업 협력' },
] as const;

export const YEAR_OPTIONS = generateDescendingOptionsFromRange(
  1900,
  new Date().getFullYear(),
);

export const MONTH_OPTIONS = generateDescendingOptionsFromRange(1, 12);

export const BIRTH_VIEW_OPTIONS = [
  { key: 'lunar', label: '음력' },
  { key: 'solar', label: '양력' },
] as const;

export const COUNTRY_CODE_OPTIONS = [
  { code: 'KOR', dial: '82' },
  { code: 'JPN', dial: '81' },
  { code: 'CHN', dial: '86' },
];
