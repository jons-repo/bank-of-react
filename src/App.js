import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import UserProfile from './components/UserProfile';
import SignIn from './components/SignIn';
import Debits from './components/Debits';
import Credits from './components/Credits';

class App extends Component {
  constructor() {
    super();
    this.state = {
      accountBalance: 0,
      currentUser: {
        userName: 'bob_loblaw',
        memberSince: '08/23/99'
      },
      isAuthenticated: false
    };
  }

  handleSignIn = () => {
    this.setState({ isAuthenticated: true });
  };

  updateAccountBalance = (updatedBalance) => {
    this.setState({ accountBalance: updatedBalance });
  };

  render() {
    return (
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              this.state.isAuthenticated ? (
                <UserProfile
                  currentUser={this.state.currentUser}
                  accountBalance={this.state.accountBalance}
                  updateAccountBalance={this.updateAccountBalance}
                />
              ) : (
                <Navigate to="/signIn" replace />
              )
            }
          />
          <Route path="/signIn" element={<SignIn handleSignIn={this.handleSignIn} />} />
          <Route
            path="/credits"
            element={
              this.state.isAuthenticated ? (
                <Credits
                  accountBalance={this.state.accountBalance}
                  updateAccountBalance={this.updateAccountBalance}
                />
              ) : (
                <Navigate to="/signIn" replace />
              )
            }
          />
          <Route
            path="/debits"
            element={
              this.state.isAuthenticated ? (
                <Debits
                  accountBalance={this.state.accountBalance}
                  updateAccountBalance={this.updateAccountBalance}
                />
              ) : (
                <Navigate to="/signIn" replace />
              )
            }
          />
          <Route
            path="/userProfile"
            element={
              this.state.isAuthenticated ? (
                <UserProfile
                  currentUser={this.state.currentUser}
                  accountBalance={this.state.accountBalance}
                  updateAccountBalance={this.updateAccountBalance}
                />
              ) : (
                <Navigate to="/signIn" replace />
              )
            }
          />
        </Routes>
      </Router>
    );
  }
}

export default App;
