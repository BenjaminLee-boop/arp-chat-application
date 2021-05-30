/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import styled from 'styled-components';
import { Avatar } from '@material-ui/core';

function ChatArea({ dataAtrib }) {
  return (
    <MessageContainer>
      <img src={dataAtrib.picture} alt={dataAtrib.name} />
      <MessageInfo>
        <h4>
          {dataAtrib.name}
          {'  '}
          <span>{dataAtrib.createdAt}</span>
        </h4>
        <p>{dataAtrib.message}</p>
      </MessageInfo>
    </MessageContainer>
  );
}

export default ChatArea;

const MessageContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  > img {
    height: 50px;
    border-radius: 8px;
  }
`;

const MessageInfo = styled.div`
  padding-left: 10px;
  > h4 > span {
    color: gray;
    font-weight: 300px;
    margin-left: 4px;
    font-size: 0.7rem;
  }
`;
