import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import type { ProviderComponent } from './types';
import { Loader } from '@/shared/loader';

/**
 * Провайдер оборачивает приложение в BrowserRouter с Suspense.
 * Во время ленивой подгрузки чанка может появиться лоадер.
 * */

export const withRouter = (Component: ProviderComponent) => () =>
  (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Component />
      </Suspense>
    </BrowserRouter>
  );
