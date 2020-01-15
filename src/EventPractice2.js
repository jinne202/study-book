import React, {useState} from 'react';

const EventPractice2 = () => {
    const [form, setForm] = useState({
        username : '',
        message : ''
    });
    const {username, message} = form;
    const onChange = (e) => {
        const nextForm = {
            ...form,
            [e.target.name] : e.target.value
        };
        setForm(nextForm);
    };
    const onClick = () => {
        console.log(username + '-' + message);
        setForm({
            username : '',
            message : ''
        })
    };
    const onKeyPress = (e) => {
        if(e.key === 'Enter'){
            onClick();
        }
    };

    return(
        <div>
            <h1>해리포터 주문을 써보자</h1>
            <input
                type = "text"
                name = "username"
                placeholder = "해리포터"
                value = {username}
                onChange = {onChange}
                onKeyPress = {onKeyPress}
            />
            <input
                type = "text"
                name = "message"
                placeholder = "주문을 입력하세요"
                value = {message}
                onChange = {onChange}
                onKeyPress = {onKeyPress}
            />
            <button onClick = {onClick}>아씨오</button>
        </div>
    )
}

export default EventPractice2;