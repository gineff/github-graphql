import { useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Input, Button, AppBar, Toolbar } from '@mui/material';
import styles from './header.module.scss';

export const Header = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.value = searchParams.get('q') || '';
    }
  }, [searchParams]);

  const handleSearch = () => {
    if (inputRef.current) {
      searchParams.set('q', inputRef.current.value.trim());
      setSearchParams(searchParams);
    }
  };

  return (
      <AppBar
        position="static"
        sx={{
          width: '100%',
          height: '80px',
          backgroundColor: '#00838F',
          boxShadow: 'none' 
        }}
      >
        <Toolbar
          disableGutters
          sx={{
            display: 'flex',
            flex: 1,
            alignItems: 'center',
            height: '100%',
            px: 4,
            gap: 1,
          }}
        >
          <Input
            className={styles.input}
            inputRef={inputRef}
            placeholder="Введите поисковый запрос"
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleSearch}
            className={styles.button}
          >
            Искать
          </Button>
        </Toolbar>
      </AppBar>
  );
};
