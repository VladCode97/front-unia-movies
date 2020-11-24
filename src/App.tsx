import React from 'react';
import { HomeComponent } from './components/Home/home.component';
import { useHistory, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { LoginComponent } from './components/Auth/Login/login.component';
import { RegisterComponent } from './components/Auth/Login/register.component';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={HomeComponent} />
          <Route exact path="/signIn" component={LoginComponent} />
          <Route exact path="/register" component={RegisterComponent} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
