export type Repository = {
  id: string;
  name: string;
  primaryLanguage: {
    name: string;
  };
  stargazerCount: number;
  forkCount: number;
  updatedAt: string;
};

type Cursor = string;

export type PageInfo = {
  startCursor: Cursor;
  endCursor: Cursor;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
};

export type RepositoriesResponse = {
  search: {
    repositoryCount: number;
    edges: {
      node: Repository;
    }[];
    pageInfo: PageInfo;
  };
};



export type RepositoriesQueryArgs = {
  query: string;
  limit: number;
  after: Cursor;
  before: Cursor;
};

export type AppState = {
  query: string;
  repositoriesPerPage: number;
  totalRepositories: number;
  pageInfo: Partial<PageInfo>;
  pageCursor: null;
};
