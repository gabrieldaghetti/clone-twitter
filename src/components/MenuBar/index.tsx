import React from 'react';

import {
  Container,
  TopSide,
  Logo,
  MenuButton,
  HomeIcon,
  FavoriteIcon,
  BellIcon,
  EmailIcon,
  ProfileIcon,
  BotSide,
  Avatar,
  ProfileData,
  ExitIcon,
} from './styles';

import Button from '../Button';

const MenuBar: React.FC = () => {
  return (
    <Container>
      <TopSide>
        <Logo />

        <MenuButton>
          <HomeIcon />
          <span>Página Inicial</span>
        </MenuButton>
        <MenuButton>
          <BellIcon />
          <span>Notificações</span>
        </MenuButton>
        <MenuButton>
          <EmailIcon />
          <span>Mensagens</span>
        </MenuButton>
        <MenuButton>
          <FavoriteIcon />
          <span>Favoritados</span>
        </MenuButton>
        <MenuButton className="active">
          <ProfileIcon />
          <span>Perfil</span>
        </MenuButton>

        <Button outlined={false}>
          <span>Tweetar</span>
        </Button>
      </TopSide>

      <BotSide>
        <Avatar />
        <ProfileData>
          <strong>Gabriel Daghetti</strong>
          <span>@gabriel</span>
        </ProfileData>
        <ExitIcon />
      </BotSide>
    </Container>
  );
};

export default MenuBar;
