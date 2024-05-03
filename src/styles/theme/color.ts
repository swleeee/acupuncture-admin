export const color = {
  white: '#fff',
  black: '#000',
  gray_50: '#F5F7FA',
  gray_300: '#84849D',
  gray_400: '#A1A5B3',
  blue_100: '#EBF1FF',
  blue_500: '#4F80FD',
  red_10: '#EE7373',
} as const;

export type ColorType = typeof color;
