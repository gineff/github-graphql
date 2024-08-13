import type { Repository } from "@/app/services/types";


export type RepositoriesListProps = {
  repositories: {
    node: Repository;
  }[];
}
