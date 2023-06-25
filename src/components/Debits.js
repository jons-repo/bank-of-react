import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Debits extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newDebitAmount: 0, // The amount of the new debit to be added
        };
    }

    // Function to handle input change for the new debit amount
    handleInputChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    // Function to add a new debit
    addDebit = () => {
        const { newDebitAmount } = this.state;

        // Check if the new debit amount is provided
        if (!newDebitAmount) {
            alert('Please enter the amount.');
            return;
        }

        // Calculate the updated account balance by subtracting the new debit amount
        const updatedBalance = parseFloat(this.props.accountBalance) - parseFloat(newDebitAmount);
        this.props.updateAccountBalance(updatedBalance);

        // Reset the new debit amount
        this.setState({
            newDebitAmount: 0,
        });
    };

    render() {
        const { accountBalance } = this.props;
        const { newDebitAmount } = this.state;

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
