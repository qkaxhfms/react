import React from 'react';
import styled from 'styled-components';

const ButtonBox = styled.button`
    width: 120px;
    height: 50px;
    background: black;
`

function Button(){
    return <ButtonBox>회원가입</ButtonBox>;
    
}

export default Button;