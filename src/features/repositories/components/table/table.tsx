import { FC } from 'react';
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@mui/material';
import { RepositoriesTableProps } from './type';

export const RepositoriesTable: FC<RepositoriesTableProps> = ({
  repositories,
}) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Название</TableCell>
            <TableCell align="right">Язык</TableCell>
            <TableCell align="right">Число форков</TableCell>
            <TableCell align="right">Число звезд</TableCell>
            <TableCell align="right">Дата обновления</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {repositories.map(({ node }) => (
            <TableRow
              key={node.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {node.name}
              </TableCell>
              <TableCell align="right">
                {node.primaryLanguage?.name || 'N/A'}
              </TableCell>
              <TableCell align="right">{node.stargazerCount}</TableCell>
              <TableCell align="right">{node.forkCount}</TableCell>
              <TableCell align="right">
                {new Date(node.updatedAt).toLocaleDateString()}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
