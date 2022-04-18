import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/home';

const Login = lazy(() => import('./pages/login'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/" element={Home} />
          <Route path="/login" element={Login} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
