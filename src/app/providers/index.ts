import { withStore } from './withStore.provider';
import compose from './compose';

export const withProviders = compose(withStore);
