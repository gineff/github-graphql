import { PageInfo } from '@/app/services/types';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { createCursor } from '../utils/cursor';

export const useGetPageLink = (pageInfo?: PageInfo) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [stack, setStack] = useState<{ [key: string]: string }>({});
  const query = searchParams.get('q') ?? '';
  const sort = searchParams.get('s') ?? '';
  const currentPage = Number(searchParams.get('p')) || 1;
  const cursor = searchParams.get('c') ?? '';
  const limit = Number(searchParams.get(''));

  useEffect(() => {
    setStack({ ...stack, [currentPage]: cursor });
  }, [currentPage]);

  useEffect(() => {
    if (!query) {
      searchParams.delete('p');
      setSearchParams(searchParams);
    }
    setStack({});
  }, [query, limit, sort]);

  const getPageLink = (page: number) => {
    const newSearchParams = new URLSearchParams(searchParams);

    if (page !== 1 && pageInfo) {
      newSearchParams.set('p', String(page));
      newSearchParams.set(
        'c',
        stack[page] || createCursor(pageInfo, page - currentPage)
      );
    } else {
      newSearchParams.delete('c');
      newSearchParams.delete('p');
    }

    return `?${newSearchParams.toString()}`;
  };

  return getPageLink;
};
