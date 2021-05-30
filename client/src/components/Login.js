/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import API_URL from '../utils/API_URL';

function Login() {
  return (
    <div>
      <a href={`${API_URL}/oauth/google`}> Click Me</a>
    </div>
  );
}

export default Login;
