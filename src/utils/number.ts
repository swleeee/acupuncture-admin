import type { MutableOptionsType } from '@/types';

export const generateDescendingOptionsFromRange = (
  start: number,
  end: number,
) =>
  Array.from(
    { length: end - start + 1 },
    (_, i) => end - i,
  ).reduce<MutableOptionsType>(
    (acc, number) => [...acc, { key: `${number}`, label: `${number}` }],
    [],
  );
