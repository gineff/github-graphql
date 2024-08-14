

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

type RepositoryTopicsResponse = {
  edges: {
    node: {
      topic: {
        name: string;
      };
    };
  }[];
};

export type GetRepositoryResponse = {
  node: {
    name: string;
    description: string;
    stargazerCount: number;
    licenseInfo: {
      name: string;
    };
    primaryLanguage: {
      name: string;
    };
    repositoryTopics: RepositoryTopicsResponse;
  };
};

export type GetRepositoryArgs = {
  id: string | null;
};

export type AppState = {
  repositoryId: string | null;
};
