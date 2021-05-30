import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Avatar } from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import { useFeathers } from 'figbird';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import IconButton from '@material-ui/core/IconButton';
import { useStore } from 'easy-peasy';

function Header() {
  const feathers = useFeathers();
  const userData = useStore().getState();
  return (
    <div>
      <HeaderContainer>
        <HeaderLeft>
          <HeaderAvatar src={userData.user.user.picture} />
        </HeaderLeft>
        <HeaderSearch>
          <SearchIcon />
          <input placeholder="Search Da Chats" />
        </HeaderSearch>
        <HeaderRight>
          <IconButton
            onClick={() => {
              feathers.logout();
              window.location.href = '/';
            }}
          >
            <ExitToAppIcon />
          </IconButton>
        </HeaderRight>
      </HeaderContainer>
    </div>
  );
}
export default Header;

const HeaderContainer = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  background-color: var(--color-scheme);
  color: white;
`;
const HeaderLeft = styled.div`
  flex: 0%.3;
  display: flex;
  align-items: center;
  margin-left: 20px;
  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 30px;
  }
`;
const HeaderSearch = styled.div`
  flex: 0.4;
  opacity: 1;
  border-radius: 6px;
  background-color: #272527;
  display: flex;
  text-align: center;
  padding: 0 50px;
  color: white;
  border: 1px #4a4a4a solid;

  > input {
    background-color: transparent;
    border: none;
    text-align: center;
    min-width: 30vw;
    outline: 0;
    color: white;
  }
`;
const HeaderRight = styled.div`
  flex: 0.3;
  display: flex;
  align-items: flex-end;
  > .MuiIconButton-root {
    color: white;
    margin-left: auto;
    margin-right: 20px;
  }
  > .MuiSvgIcon-root > .MuiSvgIcon-root {
    color: white;
    margin-left: auto;
    margin-right: 20px;
  }
`;
const HeaderAvatar = styled(Avatar)`
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`;
