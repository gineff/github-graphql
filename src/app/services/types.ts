
//Схема репозитория в ответ на запрос к апи 
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

type Cursor = string; // Курсор для пагинации

//Схема пагинации в ответ на запрос к апи 
export type PageInfo = {
  startCursor: Cursor;
  endCursor: Cursor;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
};

// Ответ API для поиска репозиториев
export type RepositoriesResponse = {
  search: {
    repositoryCount: number;
    edges: {
      node: Repository;
    }[];
    pageInfo: PageInfo;
  };
};

//Аргументы для запроса поиска репозиториев
export type RepositoriesQueryArgs = {
  query: string;
  limit: number;
  after: Cursor;
  before: Cursor;
};

//схема топиков
type RepositoryTopicsResponse = {
  edges: {
    node: {
      topic: {
        name: string;
      };
    };
  }[];
};

//Ответ API для получения конкретного репозитория
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

//Аргументы для запроса получения репозитория по ID
export type GetRepositoryArgs = {
  id: string | null;
};

//Тип состояния приложения
export type AppState = {
  repositoryId: string | null;
};
