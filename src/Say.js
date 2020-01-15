import React, {useState} from 'react';

const Say = () => {
    const [message, setMessage] = useState('흐음');
    const [color, setColor] = useState('black')
    const onClickEnter = () => {
        setMessage ('ㅎㅇㅎㅇ');
    }
    const onClickLeave = () => {
        setMessage ('ㅂㅇㅂㅇ');
    }

    return (
        <div>
            <h1 style={{color}}>{message}</h1>
            <button onClick = {onClickEnter}>입장</button>
            <button onClick = {onClickLeave}>퇴장</button>
            <button style = {{color : 'red'}} onClick={() => setColor('red')}>빨간색</button>
            <button style = {{color : 'green'}} onClick={() => setColor('green')}>초록색</button>
            <button style = {{color : 'blue'}} onClick={() => setColor('blue')}>파란색</button>
        </div>
    )
}

export default Say;