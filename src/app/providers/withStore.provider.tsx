import { Provider } from 'react-redux';
import type { ProviderComponent } from './types';
import { store } from '@/app/services/store';

/**
 * Провайдер оборачивает приложение в Redux-store.
 * */

export const withStore = (Component: ProviderComponent) => () =>
  (
    <Provider store={store}>
      <Component />
    </Provider>
  );
