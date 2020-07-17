import React from 'react';

import {
  Container,
  Header,
  BackIcon,
  ProfileInfo,
  BottomMenu,
  HomeIcon,
  EmailIcon,
  SearchIcon,
  BellIcon,
} from './styles';

import ProfilePage from '../ProfilePage';
import Feed from '../Feed';

const Main: React.FC = () => {
  return (
    <Container>
      <Header>
        <button>
          <BackIcon />
        </button>
        <ProfileInfo>
          <strong>Gabriel</strong>
          <span>100 tweets</span>
        </ProfileInfo>
      </Header>

      <ProfilePage />

      {/* <Feed /> */}

      <BottomMenu>
        <HomeIcon />
        <SearchIcon />
        <BellIcon />
        <EmailIcon />
      </BottomMenu>
    </Container>
  );
};

export default Main;
