import type { Repository } from '@/app/services/types';

export type RepositoriesTableProps = {
  repositories: {
    node: Repository;
  }[];
};
