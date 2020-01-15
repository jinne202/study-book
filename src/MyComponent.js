import React, {Component} from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component{
    static defualtProps = {
        name : "더블브이"
    }
    static propTypes = {
        name : PropTypes.string,
        favoriteNumber : PropTypes.number.isRequired
    }
    render(){
        const {name, favoriteNumber, children} = this.props;
        return(
            <div>나는 나는 {name} <br/>
                삼도내안의슬프미내안의기쁘미 {children}
                더블 브이가 부릅니다 {favoriteNumber}도
            </div>
        )
    }
}


export default MyComponent;