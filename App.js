import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, useHistory } from 'react-router-dom';
import users from './Userdata';
import MainPage from './main';
import Login from './login.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      isLoggedIn: false,
      loginError: false,
    };
  }

  handleUsernameChange = (e) => {
    this.setState({ username: e.target.value });
  };

  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value });
  };

  handleLogin = () => {
    const { username, password } = this.state;
    const user = users.find((u) => u.username === username && u.password === password);
    if (user) {
      this.setState({ isLoggedIn: true, loginError: false });
      this.props.history.push('/main');
    } else {
      this.setState({ loginError: true });
    }
  };

  render() {
    return (
      <Router>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/main">MainPage</Link>
          </li>
        </ul>

        <Route exact path="/login" element={<Login />} />
        <Route exact path="/main" element={<MainPage />} />
      </Router>
    );
  }
}

export default App;
