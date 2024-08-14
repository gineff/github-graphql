import { Box, Typography } from '@mui/material';
import styles from './welcome.module.scss'

export const Welcome = () => (
  <Box sx={(theme) => ({ ...theme.mixins.centred, height: '100%' })}>
    <Typography className={styles.text}>Добро пожаловать</Typography>
  </Box>
);
