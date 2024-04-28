import { css } from '@emotion/react';

import { size } from './size';

export const layout = {
  horizontal_center: css`
    min-width: ${size.LAYOUT_MIN_WIDTH};
    width: ${`calc(100vw - ${size.NAV_WIDTH} - ${size.MAIN_WIDTH_PADDING} * 2)`};
    max-width: ${size.LAYOUT_MAX_WIDTH};
    margin: 0 auto;
  `,
} as const;

export type LayoutType = typeof layout;
