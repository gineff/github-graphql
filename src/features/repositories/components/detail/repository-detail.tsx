import { SerializedError } from '@reduxjs/toolkit';
import { Box, Chip, Stack, Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import { useAppSelector, type RootState } from '@/app/services/store';
import { useGetRepositoryByIdQuery } from '@/app/services/baseApi';
import { Loader } from '@/shared/loader';
import styles from './detail.module.scss';

export const RepositoryDetail = () => {
  const selectedRepositoryId = useAppSelector(
    (state: RootState) => state.app.repositoryId
  );

  /** запрос к graphql api */
  const { data, error, isFetching } = useGetRepositoryByIdQuery(
    { id: selectedRepositoryId },
    { skip: !selectedRepositoryId } // Пропустить запрос, если нет строки запроса
  );
  const repository = data?.node;

  const errorMessage =
    (error as SerializedError)?.message || 'An error occurred'; //текст ошибки запроса к апи

  return (
    <Box className={styles.container}>
      {!selectedRepositoryId && (
        <Box sx={(theme) => ({ ...theme.mixins.centred, height: '100%' })}>
          <Typography>Выберите репозиторий</Typography>
        </Box>
      )}
      {isFetching && <Loader />}
      {!!error && <Typography>{errorMessage}</Typography>}
      {!!repository && (
        <Box>
          <Typography component="h3" className={styles.name}>
            {repository.name}
          </Typography>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ marginY: '1rem' }}
          >
            <Chip
              className={styles.language}
              label={repository.primaryLanguage?.name}
            />
            <Stack direction="row" gap={1}>
              <StarIcon className={styles.starIcon} />
              <Typography className={styles.starCount}>
                {repository.stargazerCount?.toLocaleString()}
              </Typography>
            </Stack>
          </Stack>
          <Typography className={styles.description}>
            {repository.description}
          </Typography>
          {!!repository?.repositoryTopics.edges.length && (
            <Stack direction="row" gap={1} flexWrap="wrap">
              {repository?.repositoryTopics.edges.map(({ node }) => (
                <Chip
                  className={styles.topic}
                  label={node.topic.name}
                  key={node.topic.name}
                />
              ))}
            </Stack>
          )}
          <Typography className={styles.license} variant="body2">
            {repository?.licenseInfo?.name}
          </Typography>
        </Box>
      )}
    </Box>
  );
};
