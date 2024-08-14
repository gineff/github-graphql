import { useSearchParams } from 'react-router-dom';
import { Pagination } from './components/pagination';
import { RepositoriesTable } from './components/table';
import { RepositoryDetail } from './components/detail';
import { useGetRepositoriesQuery } from '@/app/services/baseApi';
import { defaultPerPage } from './constants';
import { SerializedError } from '@reduxjs/toolkit';
import { Box, Stack, Typography } from '@mui/material';
import { Loader } from '@/shared/loader';
import { parseCursor } from './utils/cursor';
import { Welcome } from './components/welcome';

export const Repositories = () => {
  /** параметры запроса хранятся в search params, для сохранения
   * при перезагрузке страницы
   */
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') ?? ''; //строка запроса
  const sort = searchParams.get('s') ?? ''; //строка запроса
  const cursor = searchParams.get('c') ?? ''; //курсор для получения текущей страницы
  const limit = Number(searchParams.get('l')) || defaultPerPage; //строк на страницу
  const [after, before] = parseCursor(cursor); //деструктуризация курсора

  /** запрос к graphql api */
  const { data, error, isFetching } = useGetRepositoriesQuery(
    { query: `${query}${sort && ` sort:${sort}`}`, after, before, limit },
    { skip: !query } // Пропустить запрос, если нет строки запроса
  );
  const pageInfo = data?.search.pageInfo;
  const total = data?.search.repositoryCount ?? 0; //всего строк в результате запроса
  const errorMessage =
    (error as SerializedError)?.message || 'An error occurred'; //текст ошибки запроса к апи

  const repositories = data?.search.edges ?? [];

  if (!query) {
    return <Welcome />;
  }

  return (
    <Stack direction="row" height="100%">
      <Stack direction="column" spacing={2} height="100%" width="100%">
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <Typography component={'h3'} variant="h1">
            Результаты поиска
          </Typography>
          {isFetching ? (
            <Loader />
          ) : error ? (
            <Typography>{errorMessage}</Typography>
          ) : (
            <RepositoriesTable repositories={repositories} />
          )}
        </Box>

        <Pagination total={total} perPage={limit} pageInfo={pageInfo} />
      </Stack>
      <RepositoryDetail />
    </Stack>
  );
};
