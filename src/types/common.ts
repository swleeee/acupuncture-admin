export type ButtonActionType = 'button' | 'submit' | 'reset';
export type ButtonStyleType = 'primaryBlue' | 'secondaryBlue' | 'secondaryGray'; // NOTE: 확정 아님
export type ButtonSizeType = 'sm' | 'md'; // NOTE: 확정 아님

export type MutableOptionsType = {
  key: string;
  label: string;
}[];
export type ImmutableOptionsType = ReadonlyArray<MutableOptionsType[number]>;
export interface SelectOptionType<T extends ImmutableOptionsType> {
  key: T[number]['key'];
  label: string;
}

export interface CountryCodeType {
  code: string;
  dial: string;
}
