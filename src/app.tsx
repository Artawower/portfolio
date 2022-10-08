import Router from 'preact-router';
import MainPage from './pages/MainPage/MainPage';

export function App() {
  return (
    <Router>
      <MainPage path={import.meta.env.PROD ? '/portfolio' : '/'} />
    </Router>
  );
}
