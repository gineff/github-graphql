import { withProviders } from './providers';
import { Router } from './router/router';

/**
 *  App обернутся HOC withProviders.
 * */

function App() {
  return <Router />;
}

export default withProviders(App);
