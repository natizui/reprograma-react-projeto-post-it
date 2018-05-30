import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar'
import LoginForm from './components/form/login'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userLog: false
    }

    this.userLogin = this.userLogin.bind(this)
    this.userLogout = this.userLogout.bind(this)
  }

    userLogin() {
      this.setState({ userLog : true})
    }

    userLogout() {
      this.setState({ userLog : false})
    }

  render() {
    return (
      <div className="App">
        <Navbar userLog={this.state.userLog} userLogin={this.userLogin} userLogout={this.userLogout}/>
        <LoginForm />
      </div>
    );
  }
}

export default App;
