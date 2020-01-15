import React, {useState} from 'react';

const EventPractive2 = () => {
    const [make, setMake] = useState({
        username : '',
        message : ''
    });
    const {username, message} = make;

    const onChange = (e) => {
        const nextForm = {
            ...make,
            [e.target.name] : e.target.value
        };
        setMake(nextForm);
    };
    const onClick = () => {
        alert(username + ' ' +message);
        setMake({
            username : '',
            message : ''
        });
    };
    const onkeyPress = (e) => {
        if(e.key === 'Enter'){
            onClick();
        }
    };

    return (
        <div>
            <h1>이벤트 연습</h1>
            <input
                type = "text"
                name = "username"
                placeholder ="최애"
                value = {username}
                onKeyPress = {onkeyPress}
                onChange = {onChange}
            />
            <input
                type = "text"
                name = "message"
                placeholder ="에게 할 말"
                value = {message}
                onKeyPress = {onkeyPress}
                onChange = {onChange}
            />
            <button onClick = {onClick}>전송</button>
        </div>
    )
}

export default EventPractive2;