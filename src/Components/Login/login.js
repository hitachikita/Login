import React, { useRef } from 'react';
import './login.scss';
// import '../AppJS.js';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = { inputDivOne: 'input-div one', inputDivTwo: 'input-div two' };
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

    handleChangeOne() {
        this.setState({ inputDivOne: 'input-div one focus' });
    }
    handleChangeTwo() {
        this.setState({ inputDivTwo: 'input-div two focus' });
    }
    handleSubmit() {
        alert("Successful login!");
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

                            <div className={this.state.inputDivOne} onClick={this.handleChangeOne.bind(this)}>
                                <div className='i'>
                                    {/* <i className='fas fa user'></i> */}
                                </div>
                                <div className='div'>
                                    <h5>Username</h5>
                                    <input type='text' className='input' />
                                </div>
                            </div>

                            <div className={this.state.inputDivTwo} onClick={this.handleChangeTwo.bind(this)}>
                                <div className='i'>
                                    {/* <i className='fas fa lock'></i> */}
                                </div>
                                <div className='div'>
                                    <h5>Password</h5>
                                    <input type='password' className='input'></input>
                                </div>
                            </div>
                            <a href=''>Forgot Password</a>
                            <input type='submit' className='btn' value='login'></input>

                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
