import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import ProfileSetup from './components/ProfileSetup';
import PointIssuance from './components/PointIssuance';
import PointManagement from './components/PointManagement';

const App = () => {
  const [token, setToken] = useState(null);

  const handleLogin = (token) => {
    setToken(token);
  };

  const handleLogout = () => {
    setToken(null);
  };

  return (
    <Router>
      <div>
        <header>
          <h1>Coalition Loyalty Point</h1>
          {token ? (
            <button onClick={handleLogout}>Logout</button>
          ) : (
            <p>Login to continue</p>
          )}
        </header>
        
        <main>
          <Switch>
            <Route exact path="/" component={() => (token ? <PointManagement /> : <Login onLogin={handleLogin} />)} />
            <Route path="/profile-setup" component={ProfileSetup} />
            <Route path="/point-issuance" component={PointIssuance} />
            <Route path="/point-management" component={PointManagement} />
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default App;
