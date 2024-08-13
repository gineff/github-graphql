import { useGetRepositoriesQuery } from '@/app/services/baseApi';
import { changePageInfo } from '@/app/services/slice';
import {
  RootState,
  useAppSelector,
  useAppDispatch,
} from '@/app/services/store';
import { useEffect } from 'react';
import { SerializedError } from '@reduxjs/toolkit';

export const RepositoriesList = () => {
  const { pageCursor, query, repositoriesPerPage } = useAppSelector(
    (state: RootState) => state.app
  );
  const dispatch = useAppDispatch();

  // Запрос к API
  const { data, error, isLoading, isFetching } = useGetRepositoriesQuery(
    { query, repositoriesPerPage, pageCursor },
    { skip: !query } // Пропустить запрос, если нет строки запроса
  );

  const errorMessage =
    (error as SerializedError)?.message || 'An error occurred';

  // Используем useEffect для обновления pageInfo, когда изменяется data
  useEffect(() => {
    if (data?.search.pageInfo) {
      dispatch(changePageInfo(data.search.pageInfo));
    }
  }, [data, dispatch]);

  return (
    <div>
      {isLoading && <p>Loading...</p>}

      {!!errorMessage && <p>Error: {errorMessage}</p>}

      {data && (
        <>
          <ul>
            {data.search.edges?.map((edge) => (
              <li key={edge.node.id}>
                <h3>{edge.node.name}</h3>
                <p>Language: {edge.node.primaryLanguage?.name || 'N/A'}</p>
                <p>Stars: {edge.node.stargazerCount}</p>
                <p>Forks: {edge.node.forkCount}</p>
                <p>
                  Updated At:{' '}
                  {new Date(edge.node.updatedAt).toLocaleDateString()}
                </p>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};
