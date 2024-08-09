type Repository = {
  name: string;
  primaryLanguage: {
    name: string;
  };
  stargazerCount: number;
  forkCount: number;
  updatedAt: string;
};

type PageInfo = {
  endCursor: string;
  hasNextPage: boolean;
};

export type RepositoriesResponse = {
  repositoryCount: number;
  edges: {
    node: Repository;
  }[];
  pageInfo: PageInfo;
};

export 
type RepositoriesQueryArgs = {
  query: string;
  limit: number;
  after?: string | null;
};
