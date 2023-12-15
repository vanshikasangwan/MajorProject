import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, useHistory, Routes} from 'react-router-dom';
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
        <Routes>

        <Route path="/main" component={<MainPage />} />
        <Route path="/login" component={<Login />} />
        <Route path = "/App" exact component ={<App />}/>
        </Routes> 
      </Router>
    );
  }
}

export default App;
