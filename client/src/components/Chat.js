/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useEffect, useRef } from 'react';
import { InfoOutlined, StarBorderOutlined } from '@material-ui/icons';
import styled from 'styled-components';
import { useStore, useStoreState } from 'easy-peasy';
import { useMutation, useFeathers, useFind } from 'figbird';
import ChatInput from './ChatInput';
import ChatArea from './ChatArea';

function Chat() {
  const chatRef = useRef(null);
  const roomID = useStoreState(state => state.roomId);
  const { status, data, total } = useFind('rooms', {
    query: { _id: roomID },
  });
  const messages = useFind('messages', {
    query: { room_id: roomID },
  });
  const dataChats = messages.data;

  const scrollToBottom = () => {
    chatRef.current?.scrollIntoView({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(scrollToBottom, [dataChats]);
  return (
    <ChatContainer>
      <>
        <Header>
          <HeaderLeft>
            <h4>
              <strong>#{data ? data[0].roomName : 'Error'}</strong>
            </h4>
            <StarBorderOutlined />
          </HeaderLeft>
          <HeaderRight>
            <p>
              <InfoOutlined />
              Details
            </p>
          </HeaderRight>
        </Header>
        <ChatMessages>
          {dataChats
            ? dataChats.map(e => (
                <ChatArea dataAtrib={e} key={e._id} />
                // eslint-disable-next-line indent
              ))
            : 'No message'}
          <ChatBottom ref={chatRef} />
        </ChatMessages>
        <ChatInput roomName={data ? data[0].roomName : 'Error'} />
      </>
    </ChatContainer>
  );
}

export default Chat;

const ChatContainer = styled.div`
  flex-grow: 1;
  overflow-y: scroll;
  margin-top: 4rem;
  padding-bottom: 5rem;
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid lightgray;
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  > h4 {
    display: flex;
    text-transform: lowercase;
    margin-right: 10px;
  }
  > h4 > .MuiSvgIcon-root {
    margin-left: 20px;
    font-size: 1rem;
  }
`;

const HeaderRight = styled.div`
  > p {
    display: flex;
    align-items: center;
    font-size: 0.8rem;
  }
  > p > .MuiSvgIcon-root {
    margin-right: 5px !important;
    font-size: 1rem;
  }
`;
const ChatMessages = styled.div``;
const ChatBottom = styled.div`
  padding-bottom: 20px;
`;
