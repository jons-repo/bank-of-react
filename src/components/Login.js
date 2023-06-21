import React, { Component } from 'react'
import { Navigate } from 'react-router-dom'

class LogIn extends Component {
    constructor() {
        super()
        this.state = {
            user: {
                userName: '',
                password: ''
            },
            redirect: false
        }
    }

    handleChange = (e) => {
        // Update the corresponding field in the user object in state
        const updatedUser = { ...this.state.user }
        const inputField = e.target.name
        const inputValue = e.target.value
        updatedUser[inputField] = inputValue

        // Update the user object in state with the new value
        this.setState({ user: updatedUser })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        // Call the mockLogIn function passed as a prop with the user object in state
        this.props.mockLogIn(this.state.user)
        // Set the redirect flag to true to navigate to the user profile
        this.setState({ redirect: true })
    }

    render() {
        // If redirect flag is true, navigate to the user profile
        if (this.state.redirect) {
            return <Navigate to="/userProfile" replace />
        }

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="userName">User Name</label>
                        <input type="text" name="userName" onChange={this.handleChange} value={this.state.user.userName} />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" />
                    </div>
                    <button>Log In</button>
                </form>
            </div>
        )
    }
}

export default LogIn
