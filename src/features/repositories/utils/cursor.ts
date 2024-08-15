import { PageInfo } from '@/app/services/types';

//парсинг курсора, хранящегося в search параметрах
export const parseCursor = (cursor: string) => {
  return cursor.startsWith('after')
    ? [cursor.slice(5), '']
    : ['', cursor.slice(6)];
};

//создание курсора для хранения в search параметрах
export const createCursor = (pageInfo: PageInfo, direction: number) => {
  return direction > 0
    ? `after${pageInfo.endCursor}`
    : `before${pageInfo.startCursor}`;
};
