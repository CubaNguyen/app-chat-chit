import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Login.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';



class Login extends Component {
    constructor(props) {
        super(props);

        // Khởi tạo trạng thái (state)
        this.state = {
            accout: {
                username: '',
                password: '',

            },
            showPassword: false
        };

    }

    componentDidMount() {

    }

    handleSubmit = () => {
        console.log('submit ', this.state)
    }

    handleInput = (event, input) => {
        this.setState({
            accout: {
                ...this.state.credentials,
                [input]: event.target.value,
            },
        })
    }

    handleShowPass = () => {
        this.setState({
            showPassword: !this.state.showPassword
        })
    }

    render() {
        let { username, password, showPassword } = this.state
        return (
            <div className='loginContainer'>
                <div className='logoLogin'>

                </div>
                <div className='text'>
                    Connect with your favourite people
                </div>
                <div className='form'>



                    <input type="text" className='user'
                        value={username}
                        onChange={(event) => this.handleInput(event, 'username')}
                        placeholder='Email address or phone number' />

                    <div className='passwordContainer'>
                        <input type={showPassword === true ? 'text' : "password"} className='password'
                            value={password}
                            onChange={(event) => this.handleInput(event, 'password')}
                            placeholder='Passwork' />
                        <FontAwesomeIcon className='icon' icon={showPassword === true ? faEye : faEyeSlash}
                            onClick={() => this.handleShowPass()}
                        />
                    </div>


                </div>
                <button className='btnLogin'
                    onClick={() => this.handleSubmit()}
                    type="submit">Continue</button>
                <div className='footer'>

                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {

    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);