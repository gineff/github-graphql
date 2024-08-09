import { createApi } from '@reduxjs/toolkit/query/react';
import { graphqlRequestBaseQuery } from '@rtk-query/graphql-request-base-query';
import { gql } from 'graphql-request';
import { RepositoriesResponse, RepositoriesQueryArgs } from './types';

/** RTK Query Api */
const githubToken = import.meta.env.VITE_GITHUB_KEY;

export const api = createApi({
  reducerPath: 'githubApi',
  baseQuery: graphqlRequestBaseQuery({
    url: 'https://api.github.com/graphql',
    prepareHeaders: (headers) => {
      headers.set('Authorization', `Bearer ${githubToken}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getRepositories: builder.query<RepositoriesResponse, RepositoriesQueryArgs>(
      {
        query: ({ query, limit, after = null }) => ({
          document: gql`
            query SearchRepositories(
              $query: String!
              $limit: Int!
              $after: String
            ) {
              search(
                query: $query
                type: REPOSITORY
                first: $limit
                after: $after
              ) {
                repositoryCount
                edges {
                  node {
                    ... on Repository {
                      name
                      primaryLanguage {
                        name
                      }
                      stargazerCount
                      forkCount
                      updatedAt
                    }
                  }
                }
                pageInfo {
                  endCursor
                  hasNextPage
                }
              }
            }
          `,
          variables: {
            query,
            limit,
            after,
          },
        }),
      }
    ),
  }),
});

export const { useGetRepositoriesQuery } = api;
