export const zIndex = {
  CHECKBOX: 10,
  HEADER: 100,
  NAVBAR: 1000,
} as const;

export type ZIndexType = typeof zIndex;
