import { useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Input, Button, Box, AppBar, Toolbar } from '@mui/material';
import style from './header.module.scss';

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
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          width: '100%',
          height: '80px',
          backgroundColor: '#00838F',
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
            className={style.input}
            inputRef={inputRef}
            placeholder="Введите поисковый запрос"
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleSearch}
            className={style.button}
          >
            Искать
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
