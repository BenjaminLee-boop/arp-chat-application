import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import PeopleIcon from '@material-ui/icons/People';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import AddIcon from '@material-ui/icons/Add';
import { useFind, useMutation } from 'figbird';
import { useStore } from 'easy-peasy';
import SidebarOption from './SidebarOption';

function Sidebar() {
  const { create } = useMutation('rooms');
  const { data } = useFind('rooms', {
    allPages: true,
  });
  const userData = useStore().getState();

  const createRoom = () => {
    const roomNamePrompt = prompt('Enter Room Name');
    if (roomNamePrompt !== '') {
      create({
        roomName: roomNamePrompt,
        roomOwner: userData.user.user.googleId,
      });
    } else {
      alert('Please Enter a vaid name');
    }
  };
  return (
    <SidebarContainer>
      <SidebarHeader>
        <SidebarInfo>
          <h2>Nulltec</h2>
          <h3>
            <FiberManualRecordIcon />
            {userData.user.user.name}
          </h3>
        </SidebarInfo>
        <CreateIcon onClick={createRoom} />
      </SidebarHeader>
      {data ? (
        data.map(e => (
          <SidebarOption title={e.roomName} key={e._id} roomID={e._id} />
        ))
      ) : (
        <SidebarOption title="Rooms" />
      )}
    </SidebarContainer>
  );
}

export default Sidebar;
const SidebarContainer = styled.div`
  background-color: var(--color-scheme);
  color: white;
  border-top: 1px solid #262527;
  width: 260px;
  max-width: 260px;
  margin-top: 60px;
  user-select: none;

  > hr {
    border: 1px solid #262527;
    margin: 10px 0;
  }
`;
const SidebarHeader = styled.div`
  display: flex;
  border-bottom: 1px solid #262527;
  padding: 13px;

  > .MuiSvgIcon-root {
    padding: 8px;
    color: #49274b;
    font-size: 18px;
    background-color: white;
    border-radius: 999px;
    cursor: pointer;
  }
`;
const SidebarInfo = styled.div`
  flex: 1;
  > h2 {
    font-size: 0.9rem;
    font-weight: 900;
    margin-bottom: 5px;
  }
  > h3 {
    display: flex;
    font-size: 0.8rem;
    font-weight: 400;
    align-items: center;
  }

  > h3 > .MuiSvgIcon-root {
    font-size: 0.8rem;
    margin-top: 1px;
    margin-right: 2px;
    color: green;
  }
`;
