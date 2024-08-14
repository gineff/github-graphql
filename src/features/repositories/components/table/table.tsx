import { FC, useEffect, useState } from 'react';
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableSortLabel,
} from '@mui/material';
import {
  Order,
  RepositoriesTableProps,
  SortedCell,
  SortedCellId,
} from './type';
import { useSearchParams } from 'react-router-dom';
import { RootState, useAppDispatch, useAppSelector } from '@/app/services/store';
import { selectRepository } from '@/app/services/slice';

export const RepositoriesTable: FC<RepositoriesTableProps> = ({
  repositories,
}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const sort = searchParams.get('s') ?? '';

  /**  Состояние для хранения текущего порядка сортировки ('asc' или 'desc') */
  const [order, setOrder] = useState<Order>();
  /** Состояние для хранения идентификатора столбца, по которому осуществляется сортировка */
  const [orderBy, setOrderBy] = useState<SortedCellId>();
  const dispatch = useAppDispatch()
  const selectedRepositoryId = useAppSelector((state: RootState) => state.app.repositoryId)

  useEffect(() => {
    if (order && orderBy) {
      searchParams.set('s', `${orderBy}-${order}`);
      setSearchParams(searchParams);
    }
  }, [order, orderBy]);

  useEffect(() => {
    const [paramOrderBy, paramOrder] = sort.split('-');
    setOrder(paramOrder as Order);
    setOrderBy(paramOrderBy as SortedCellId);
  }, []);

  /** Обработчик изменения порядка сортировки по выбранному столбцу */
  const handleSort = (property: SortedCellId) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleClick = (_: React.MouseEvent<unknown>, id: string) => {
    dispatch(selectRepository(id))
  };

  /** Определение колонок, по которым производится сортировка */
  const sortedCells: SortedCell[] = [
    { id: 'name', title: 'Название', align: 'right' },
    { id: 'language', title: 'Язык', align: 'left' },
    { id: 'forks', title: 'Число форков', align: 'left' },
    { id: 'stars', title: 'Число звезд', align: 'left' },
  ];

  return (
    <TableContainer sx={{ px: '32px', flex: 1, minWidth: '768px' }}>
      <Table sx={{ border: 'none' }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {sortedCells.map(({ id, title, align }) => (
              <TableCell
                key={id}
                sortDirection={orderBy === id ? order : false}
                align={align ?? 'right'}
              >
                <TableSortLabel
                  active={orderBy === id}
                  direction={orderBy === id ? order : 'asc'}
                  onClick={() => handleSort(id)}
                >
                  {title}
                </TableSortLabel>
              </TableCell>
            ))}
            <TableCell>Дата обновления</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {repositories.map(({ node }) => (
            <TableRow
              key={node.id}
              hover
              onClick={(event) => handleClick(event, node.id)}
              selected={node.id === selectedRepositoryId}
            >
              <TableCell component="th" scope="row">
                {node.name}
              </TableCell>
              <TableCell>{node.primaryLanguage?.name || 'N/A'}</TableCell>
              <TableCell>{node.forkCount}</TableCell>
              <TableCell>{node.stargazerCount}</TableCell>
              <TableCell>
                {new Date(node.updatedAt).toLocaleDateString()}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
