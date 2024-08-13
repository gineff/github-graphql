import { FC } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { TablePagination } from '@mui/material';
import { PaginationProps } from './type';
import { useGetPageLink } from '../../hooks/use-get-page-link';
import { defaultPerPage } from '../../constants';

export const Pagination: FC<PaginationProps> = ({
  perPage,
  total,
  pageInfo,
}) => {
  const navigate = useNavigate();
  const getPageLink = useGetPageLink(pageInfo);
  const [searchParams, setSearchParams] = useSearchParams();

  /** текущая страница */
  const page = Number(searchParams.get('p')) || 1;

  const handleChangePage = (event: unknown, newPage: number) => {
    navigate({ search: getPageLink(newPage + 1) });
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    searchParams.delete('p');
    searchParams.set('l', event.target.value);
    setSearchParams(searchParams);
  };

  return (
    <TablePagination
      rowsPerPageOptions={[defaultPerPage, 15, 25, 50]}
      component="div"
      count={total}
      rowsPerPage={perPage}
      page={total ? page - 1 : 0}
      onPageChange={handleChangePage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  );
};
