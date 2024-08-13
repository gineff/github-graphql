import { PageInfo } from '@/app/services/types';

export const parseCursor = (cursor: string) => {
  return cursor.startsWith('after')
    ? [cursor.slice(5), '']
    : ['', cursor.slice(6)];
};

export const createCursor = (pageInfo: PageInfo, direction: number) => {
  return direction > 0
    ? `after${pageInfo.endCursor}`
    : `before${pageInfo.startCursor}`;
};
