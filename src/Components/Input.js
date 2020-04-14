import React from 'react';
import styled from 'styled-components';

const InputBox = styled.input`
    width:140px;
    line-height:40px;
    padding:0 10px;
    carcet:#444;
    border:1px solid transparent;
    border-top:1px solid #ccc;
    border-bottom:1px solid #ccc;
`


function Input(){
    return <InputBox placeholder="text here"/>;
}

export default Input;