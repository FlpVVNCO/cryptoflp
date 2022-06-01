import React from 'react';
import styled from '@emotion/styled';

const Texto = styled.div`
    background-color: #d45656;
    color: #FFF;
    padding: 15px;
    border-radius: 10px;
    font-size: 22px;
    text-transform: uppercase;
    font-family: 'Lato', sans-serif;
    font-weight: 700;
    text-align: center;
`

const Error = ({children}) => {
    return (
        <Texto>
            {children}
        </Texto>
    )
}
export default Error;
