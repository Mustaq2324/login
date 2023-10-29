import React from 'react';
import styled from 'styled-components';

export default function Input({ type, placeholder }) {
    return <StyledInput type={type} placeholder={placeholder} />;
}

const StyledInput = styled.input`
   
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(8.5px);
    border-radius: 10px;
    width: 100%;
    height: 3rem;
    padding: 1rem;
    border: none;
    outline: none;
`;
