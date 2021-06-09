/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/control-has-associated-label */
import { Button } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import API_URL from '../utils/API';

function Login() {
  return (
    <LoginContainer>
      <LoginInnerContainer>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Google_Messages_logo.svg/1200px-Google_Messages_logo.svg.png" alt="logo" />
        <h1>Sign in to Nulltech!</h1>
        <p>Join The Nulltech Fammm.</p>
        <Button href={`${API_URL}/oauth/google`} className="google-login-button">Sign in with Google</Button>
      </LoginInnerContainer>
    </LoginContainer>
  );
}

export default Login;

const LoginContainer = styled.div`
background-color: #f8f8f8;
height: 100vh;
display: grid;
place-items: center;
`;

const LoginInnerContainer = styled.div`
padding: 100px;
text-align: center;
background-color: white;
border-radius: 10px;
box-shadow: 0 1px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
> .google-login-button {
  margin-top: 50px;
  text-transform: inherit !important;
  background-color:  #4285f4 !important;
  color:White;
}
> img {
  object-fit: contain;
  height: 100px;
  margin-bottom: 40px;
}
`;
