import { PageInfo } from '@/app/services/types';

export type PaginationProps = {
  perPage: number;
  total: number;
  pageInfo?: PageInfo;
};

export type CreatePageLink = (
  searchParams: URLSearchParams,
  params: { [key: string]: string | number }
) => string;
