import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import { useStore } from 'easy-peasy';
import { useMutation, useFeathers } from 'figbird';

function ChatInput({ roomName }) {
  const [inputRef, setinputRef] = useState('');
  const userData = useStore().getState().user.user;
  const roomID = useStore().getState().roomId;
  const { create, loading, data } = useMutation('messages');

  // eslint-disable-next-line consistent-return
  const sendMessage = async e => {
    e.preventDefault();
    if (inputRef !== '') {
      await create({
        message: inputRef,
        room_id: roomID,
        user_id: userData.googleId,
        picture: userData.picture,
        name: userData.name,
      });
      setinputRef('');
    } else {
      alert('Please Enter A Message');
    }
  };
  return (
    <ChatInputContainer>
      <form>
        <input
          value={inputRef}
          onChange={e => setinputRef(e.target.value)}
          type="text"
          placeholder={`Message #${roomName}`}
        />
        <Button type="submit" onClick={sendMessage} hidden>
          SEND
        </Button>
      </form>
    </ChatInputContainer>
  );
}

export default ChatInput;

const ChatInputContainer = styled.div`
  border-radius: 20px;
  > form {
    position: relative;
    display: flex;
    justify-content: center;
  }
  > form > input {
    position: fixed;
    bottom: 20px;
    width: 60%;
    border: 1px solid grey;
    border-radius: 3px;
    padding: 20px;
    outline: none;
  }
  > form > Button {
    display: none !important;
  }
`;
