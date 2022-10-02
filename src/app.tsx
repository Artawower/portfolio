import AsyncRoute from 'preact-async-route';
import Router from 'preact-router';
import MainPage from './pages/MainPage/MainPage';

export function App() {
  return (
      <Router>
        <MainPage path='/' />
        <AsyncRoute
          path='/contacts'
          getComponent={() =>
            import('./pages/ContactPage/ContactPage').then(
              (module) => module.default
            )
          }
        />
      </Router>
  );
}
