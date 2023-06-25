import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Credits extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newCreditAmount: 0,
        };
    }

    handleInputChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    addCredit = () => {
        const { newCreditAmount } = this.state;

        if (!newCreditAmount) {
            alert('Please enter the amount.');
            return;
        }

        const updatedBalance = parseFloat(this.props.accountBalance) + parseFloat(newCreditAmount);
        this.props.updateAccountBalance(updatedBalance);

        this.setState({
            newCreditAmount: 0,
        });
    };

    render() {
        const { accountBalance } = this.props;
        const { newCreditAmount } = this.state;

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
                    <p>Account Balance: {accountBalance.toFixed(2)}</p> {/* Display account balance */}
                </div>
                <Link to="/">Back to User Profile</Link>
            </div>
        );
    }
}

export default Credits;
