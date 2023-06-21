import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class UserProfile extends Component {
    constructor() {
        super();
        this.state = {
            accountBalance: 0,
        };
    }

    updateAccountBalance = (newBalance) => {
        // Update the account balance in state with the new value
        this.setState({ accountBalance: newBalance });
    };

    render() {
        const { accountBalance } = this.state;

        return (
            <div>
                <h1>User Profile</h1>
                <h2>Account Balance: {accountBalance.toFixed(2)}</h2>
                <Link to="/credits">Credits</Link>
                <Link to="/debits">Debits</Link>
                <Link to="/signIn" className="signout">
                    Sign Out
                </Link>
            </div>
        );
    }
}

export default UserProfile;
