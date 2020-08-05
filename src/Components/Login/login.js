import React, { useRef } from 'react';
import './login.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import usePasswordToggle from '../../Hooks/usePasswordToggle';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputDivOne: 'input-div one',
            inputDivTwo: 'input-div two',
            userName: '',
            passWord: '',
            togglePass: 'eye-slash',
            inputPassType: 'password',
        };
        // this.state = { isLoginBox: true, isRegisterBox: false };
        // this.handleChangeOne = this.handleChangeOne.bind(this);
        // this.handleChangeTwo = this.handleChangeTwo.bind(this);
    }
    // showLoginBox() {
    //     this.setState({ isLoginBox: true, isRegisterBox: false });
    // }
    // showRegisterBox() {
    //     this.setState({ isLoginBox: false, isRegisterBox: true });
    // }

    handleClickOne() {
        this.setState({ inputDivOne: 'input-div one focus' });
    }
    handleClickTwo() {
        this.setState({ inputDivTwo: 'input-div two focus' });
    }
    handleChangeOne(e) {
        this.setState({ userName: e.target.value });
    }
    handleCchangeTwo(e) {
        this.setState({ passWord: e.target.value });
    }
    handleSubmit() {
        alert('Username: ' + this.state.userName + ' Password: ' + this.state.passWord);
    }
    handleRegister() {
        alert("Open register form!");
    }
    handleTogglePass() {
        if (this.state.togglePass === 'eye-slash') {
            this.setState({ togglePass: 'eye', inputPassType: 'text' });
        } else {
            this.setState({ togglePass: 'eye-slash', inputPassType: 'password' });
        }
    }
    handleCheckLogin(pass) {
        const specialCharacterCheck = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
        const numberCheck = /0123456789/;
        var check = 0;
        if (this.state.passWord.length <= 8) {
            alert('Password length must be greater than or equal to 8 characters!');
        } else if (!specialCharacterCheck.test(this.state.passWord) || !numberCheck.test(this.state.passWord)) {
            alert('Password must exist special characters and numbers!');
        }
    }

    render() {
        return (
            <div>
                <img src={require('./images/wave.png')} alt='' className="wave"></img>
                <div className='container'>
                    <div className='img'>
                        <img src={require('./images/bg.svg')} alt=''></img>
                    </div>
                    <div className='login-content'>
                        <form action='index.html' onSubmit={this.handleSubmit.bind(this)}>

                            <img src={require('./images/avatar.svg')} alt='' className='avatar'></img>
                            <h2 className='title'>Welcom</h2>

                            <div className={this.state.inputDivOne} onClick={this.handleClickOne.bind(this)}>
                                <div className='i'>
                                    {/* <i className='fas fa-cat'></i> */}
                                    <FontAwesomeIcon className='user-icon' icon={'user'} />
                                </div>
                                <div className='div'>
                                    <h5>Username</h5>
                                    <input type='text' className='input' required onChange={this.handleChangeOne.bind(this)} />
                                </div>
                            </div>

                            <div className={this.state.inputDivTwo} onClick={this.handleClickTwo.bind(this)}>
                                <div className='i'>
                                    {/* <i className='fas fa-lock'></i> */}
                                    <FontAwesomeIcon className='lock-icon' icon={'lock'} />
                                </div>
                                <div className='div'>
                                    <h5>Password</h5>
                                    <input type={this.state.inputPassType} className='input' required onChange={this.handleCchangeTwo.bind(this)} />

                                    <div className='eye-icon'>
                                        {/* <i className='fas fa-eye password-icon'></i> */}
                                        <FontAwesomeIcon icon={this.state.togglePass} onClick={this.handleTogglePass.bind(this)} />
                                    </div>
                                </div>
                            </div>
                            <a className='forgot-a' href=''>Forgot Password</a>
                            <input type='submit' className='btn' value='login' onClick={this.handleCheckLogin.bind(this)}></input>
                            <div className='div-register'>
                                <p>Don't have an account? </p>
                                <a className='register-a' href={this.handleRegister}>Sign Up</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
