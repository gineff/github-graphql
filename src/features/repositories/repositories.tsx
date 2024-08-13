import { useSearchParams } from 'react-router-dom';
import { Pagination } from './components/pagination';
import { RepositoriesList } from './components/repositories-list';
import { RepositoryDetail } from './components/repository-detail';
import { useGetRepositoriesQuery } from '@/app/services/baseApi';
import { defaultPerPage } from './constants';
import { SerializedError } from '@reduxjs/toolkit';
import { Typography } from '@mui/material';
import { Loader } from '@/shared/loader';
import { parseCursor } from './utils/cursor';

export const Repositories = () => {
  /** параметры запроса хранятся в search params, для сохранения
   * при перезагрузке страницы
   */
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') ?? ''; //строка запроса
  const cursor = searchParams.get('c') ?? ''; //курсор для получения текущей страницы
  const limit = Number(searchParams.get('l')) || defaultPerPage; //строк на страницу
  const [after, before] = parseCursor(cursor); //деструктуризация курсора

  /** запрос к graphql api */
  const { data, error, isLoading, isFetching } = useGetRepositoriesQuery(
    { query: `${query} sort:stars-desc`, after, before, limit },
    { skip: !query } // Пропустить запрос, если нет строки запроса
  );
  const pageInfo = data?.search.pageInfo;
  const total = data?.search.repositoryCount ?? 0; //всего строк в результате запроса
  const errorMessage =
    (error as SerializedError)?.message || 'An error occurred'; //текст ошибки запроса к апи

  const repositories = data?.search.edges ?? [];

  return (
    <>
      {/**  показ загрузчика во время загрузки компонента и запроса к апи */}
      {(isLoading || isFetching) && <Loader />}
      {error && <Typography>{errorMessage}</Typography>}
      <RepositoriesList repositories={repositories} />
      <RepositoryDetail />
      <Pagination total={total} perPage={limit} pageInfo={pageInfo} />
    </>
  );
};
