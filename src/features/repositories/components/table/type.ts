import type { Repository } from '@/app/services/types';

export type RepositoriesTableProps = {
  repositories: {
    node: Repository;
  }[];
};

export type Order = 'asc' | 'desc';
export type Align = 'left' | 'right';
export type SortedCellId = 'name' | 'language' | 'stars' | 'forks' | 'updated';

export type SortedCell = {
  id: SortedCellId;
  title: string;
  align?: Align;
};
