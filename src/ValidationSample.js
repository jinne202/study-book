import React, {Component} from 'react';
import './ValidationSample.css';

class ValidationSample extends Component {
    state = {
        password : '',
        clicked : false,
        validated : false
    }

    handleChange = (e) => {
        this.setState({
            password : e.target.value
        });
    }

    handleButtonClick = () => {
        this.setState({
            clicked : true,
            validated : this.state.password === '1225'
        });
        this.focusInput.focus();
    }

    render(){
        return(
            <div>
                <input
                    type = "password"
                    value = {this.state.password}
                    onChange = {this.handleChange}
                    className = {this.state.clicked ? (this.state.validated ? 'success' : 'failure') : 'failure'}
                    ref = {(ref) => {this.focusInput = ref}}
                />
                <button onClick = {this.handleButtonClick}>비밀번호 확인</button>
            </div>
        );
    }
}

export default ValidationSample;