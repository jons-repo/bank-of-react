import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import UserProfile from './components/UserProfile';
import SignIn from './components/SignIn';
import Debits from './components/Debits';
import Credits from './components/Credits';

class App extends Component {
  constructor() {
    super();
    // Initialize the state with the default values
    this.state = {
      accountBalance: 0, // The account balance, initially set to 0
      isAuthenticated: false // Flag to indicate if the user is authenticated, initially set to false
    };
  }

  // Function to handle sign-in
  handleSignIn = () => {
    // Update the isAuthenticated state to true
    this.setState({ isAuthenticated: true });
  };

  // Function to update the account balance
  updateAccountBalance = (updatedBalance) => {
    // Update the accountBalance state with the updated balance
    this.setState({ accountBalance: updatedBalance });
  };

  render() {
    return (
      <Router>
        <Routes>
          {/* Route for the home page */}
          <Route
            path="/"
            element={
              // If authenticated, render the UserProfile component with the account balance
              this.state.isAuthenticated ? (
                <UserProfile
                  accountBalance={this.state.accountBalance}
                />
              ) :
                // If not authenticated, navigate to the sign-in page
                (
                  <Navigate to="/signIn" replace />
                )
            }
          />
          {/* Route for the sign-in page */}
          <Route path="/signIn" element={<SignIn handleSignIn={this.handleSignIn} />} />
          {/* Route for the credits page */}-
          <Route
            path="/credits"
            element={
              // If authenticated, render the Credits component with the account balance and updateAccountBalance function
              this.state.isAuthenticated ? (
                <Credits
                  accountBalance={this.state.accountBalance}
                  updateAccountBalance={this.updateAccountBalance}
                />
              ) :
                // If not authenticated, navigate to the sign-in page
                (
                  <Navigate to="/signIn" replace />
                )
            }
          />
          {/* Route for the debits page */}
          <Route
            path="/debits"
            element={
              // If authenticated, render the Debits component with the account balance and updateAccountBalance function
              this.state.isAuthenticated ? (
                <Debits
                  accountBalance={this.state.accountBalance}
                  updateAccountBalance={this.updateAccountBalance}
                />
              ) :
                // If not authenticated, navigate to the sign-in page
                (
                  <Navigate to="/signIn" replace />
                )
            }
          />
          {/* Route for the user profile page */}
          <Route
            path="/userProfile"
            element={
              // If authenticated, render the UserProfile component with the account balance
              this.state.isAuthenticated ? (
                <UserProfile
                  accountBalance={this.state.accountBalance}
                />
              ) :
                // If not authenticated, navigate to the sign-in page
                (
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
