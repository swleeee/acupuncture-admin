import { color } from './color';

export const boxShadow = {
  RADIO_BUTTON: `0 0 0 1px ${color.blue_500}`,
  SOFT: '0 4px 30px 0 rgba(46, 45, 116, 0.05);',
} as const;

export type BoxShadowType = typeof boxShadow;
