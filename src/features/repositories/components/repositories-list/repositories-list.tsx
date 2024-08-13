import { FC } from 'react';
import { RepositoriesListProps } from './type';

export const RepositoriesList: FC<RepositoriesListProps> = ({
  repositories,
}) => {
  return (
    <div>
      <ul>
        {repositories.map(({ node }) => {
          return (
            <li key={node.id}>
              <h3>{node.name}</h3>
              <p>Language: {node.primaryLanguage?.name || 'N/A'}</p>
              <p>Stars: {node.stargazerCount}</p>
              <p>Forks: {node.forkCount}</p>
              <p>Updated At: {new Date(node.updatedAt).toLocaleDateString()}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
