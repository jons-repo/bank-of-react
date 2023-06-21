import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Debits extends Component {
    constructor() {
        super();
        this.state = {
             // Array to store debit transactions
            debits: [],  
            newDebitAmount: 0,  
        };
    }

    handleInputChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    // Function to add a new debit transaction
    addDebit = () => {
        const { newDebitAmount } = this.state;

        if (!newDebitAmount) {   // Check if amount is entered
            alert('Please enter the amount.');
            return;
        }

        const newDebit = {
            type: 'debit',
            // Convert amount to float and fix decimal places
            amount: parseFloat(newDebitAmount).toFixed(2),
        };

        this.setState((prevState) => ({
            // Add new debit to the debits array
            debits: [...prevState.debits, newDebit],  
            newDebitAmount: 0,                          
        }));

        // Update the account balance by subtracting the new debit amount
        this.props.updateAccountBalance(
            this.props.accountBalance - parseFloat(newDebitAmount)
        );
    };

    render() {
        const { accountBalance } = this.props;
        const { debits, newDebitAmount } = this.state;

        return (
            <div>
                <h2>Debits</h2>

                <div>
                    <h3>Add Debit</h3>
                    <div>
                        <label>Amount: </label>
                        <input
                            type="number"
                            name="newDebitAmount"
                            value={newDebitAmount}
                            onChange={this.handleInputChange}
                        />
                    </div>
                    <button onClick={this.addDebit}>Add Debit</button>
                </div>
                <div>
                    <p>Account Balance: {accountBalance.toFixed(2)}</p>
                </div>
                <Link to="/">Back to User Profile</Link>
            </div>
        );
    }
}

export default Debits;
