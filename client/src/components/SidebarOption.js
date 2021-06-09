/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import styled from 'styled-components';
import { useStoreState, useStoreActions, useStore } from 'easy-peasy';

function SidebarOption({ Icon, title, addChannelOption, roomID }) {
  const updateRoomId = useStoreActions(actions => actions.SetroomId);
  const selectChannel = e => {
    updateRoomId(roomID);
  };

  return (
    <SidebarOptionContainer
      onClick={addChannelOption ? addChanel : selectChannel}
    >
      {Icon && <Icon fontSize="small" style={{ padding: 10 }} />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <SidebarOptionChannel>
          <span>#</span> {title}
        </SidebarOptionChannel>
      )}
    </SidebarOptionContainer>
  );
}

export default SidebarOption;

const SidebarOptionContainer = styled.div`
  display: flex;
  font-size: 0.7rem;
  padding-left: 2px;
  align-items: center;
  cursor: pointer;

  :hover {
    opacity: 0.9;
    background-color: #2d2c2c;
  }

  > h3 {
    font-weight: 500;
  }
  > h3 > span {
    padding: 15px;
  }
`;
const SidebarOptionChannel = styled.h3`
  padding: 10px 0;
  font-weight: 300;
`;
