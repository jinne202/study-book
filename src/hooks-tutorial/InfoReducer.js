import React from 'react';
import useInputs from './useInputs';

const InfoReducer = () => {
    const[state, onChange] = useInputs({
        name : '',
        nickname : ''
    });
    const {name, nickname} = state;

    return(
        <div>
            <div>
                <input
                    name = "name"
                    value = {name}
                    onChange = {onChange}
                />
                <input
                    name = "nickname"
                    value = {nickname}
                    onChange = {onChange}
                />
            </div>
            <div>
                <div>
                    이름 : {name}
                </div>
                <div>
                    닉네임 : {nickname}
                </div>
            </div>
        </div>
    )
}

export default InfoReducer;