import compose from './compose';
import { withStore } from './withStore.provider';
import { withRouter } from './withRouter.provider';
import { withTheme } from './withTheme.provider';

/** Используем функцию compose для создания HOC withProviders,
который последовательно оборачивает компонент в провайдеры маршрутизатора, хранилища и темы. */

export const withProviders = compose(withRouter, withStore, withTheme);
