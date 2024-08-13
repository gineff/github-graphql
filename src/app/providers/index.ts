import compose from './compose';
import { withStore } from './withStore.provider';
import { withRouter } from './withRouter.provider';
import { withTheme } from './withTheme.provider';

export const withProviders = compose(withRouter, withStore, withTheme);
