import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class UserProfile extends Component {
    render() {
        // Destructure the accountBalance prop from the component's props
        const { accountBalance } = this.props;

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