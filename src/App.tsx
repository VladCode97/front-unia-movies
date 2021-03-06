import React from 'react';
import { HomeComponent } from './components/Home/home.component';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { LoginComponent } from './components/Auth/Login/login.component';
import { HomeUserComponent } from './components/HomeUser/home-user.component';
import { RegisterComponent } from './components/Auth/Register/register.component';
import { UserProviver } from './Common/Context/user.context';


function App() {
  return (
    <UserProviver>
      <Router>
        <Switch>
          <Route exact path="/" component={HomeComponent} />
          <Route exact path="/signIn" component={LoginComponent} />
          <Route exact path="/register" component={RegisterComponent} />
          <Route exact path="/homeUser" component={HomeUserComponent} />
        </Switch>
      </Router>
    </UserProviver>
  );
}

export default App;
