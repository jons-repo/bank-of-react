import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Credits extends Component {
    constructor() {
        super();
        this.state = {
            credits: [],
            newCreditAmount: 0,
        };
    }

    handleInputChange = (e) => {
        // Update the corresponding field in state with the new value
        this.setState({ [e.target.name]: e.target.value });
    };

    addCredit = () => {
        const { newCreditAmount } = this.state;

        if (!newCreditAmount) {
            alert('Please enter the amount.');
            return;
        }

        const newCredit = {
            type: 'credit',
            amount: parseFloat(newCreditAmount).toFixed(2),
        };

        this.setState((prevState) => ({
            // Add the new credit to the credits array in state
            credits: [...prevState.credits, newCredit],
            newCreditAmount: 0,
        }));

        // Update the account balance in the parent component by adding the new credit amount
        this.props.updateAccountBalance(
            this.props.accountBalance + parseFloat(newCreditAmount)
        );
    };

    render() {
        const { accountBalance } = this.props;
        const { credits, newCreditAmount } = this.state;

        return (
            <div>
                <h2>Credits</h2>
                <div>
                    <h3>Add Credit</h3>
                    <div>
                        <label>Amount: </label>
                        <input
                            type="number"
                            name="newCreditAmount"
                            value={newCreditAmount}
                            onChange={this.handleInputChange}
                        />
                    </div>
                    <button onClick={this.addCredit}>Add Credit</button>
                </div>
                <div>
                    <p>Account Balance: {accountBalance.toFixed(2)}</p>
                </div>
                <Link to="/">Back to User Profile</Link>
            </div>
        );
    }
}

export default Credits;
