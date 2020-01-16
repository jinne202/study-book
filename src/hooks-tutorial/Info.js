import React, {useState, useEffect} from 'react';

const Info = () => {
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');

    useEffect(() => {
        console.log('effect');
        console.log(name);
        return () => {
            console.log('clean up');
            console.log(name);
        };
    });

    const onChangeName = (e) => {
        setName(e.target.value);
    };

    const onChangeNickname = (e) => {
        setNickname(e.target.value);
    };

    return(
        <div>
            <div>
                <input
                    value = {name}
                    onChange = {onChangeName}
                />
                <input
                    value = {nickname}
                    onChange = {onChangeNickname}
                />
            </div>
            <div>
                <b>이름 : {name}</b>
                <b>닉네임 : {nickname}</b>
            </div>
        </div>
    )
}

export default Info;