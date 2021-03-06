import React from 'react';
import { FiUsers } from 'react-icons/fi';

import { UserInfo as UserInfoProps } from '../../hooks/user';

import { Container } from './styles';

const UserInfo = ({
  name,
  bio,
  email,
  avatar_url,
  following,
  followers,
}: UserInfoProps) => {
  return (
    <Container>
      <img src={avatar_url} alt={name} />
      <strong>{name}</strong>
      <span>{bio}</span>
      <div>
        <FiUsers />
        <p>
          <b>{followers}</b> followers - <b>{following}</b> following
        </p>
      </div>
      <span>{email}</span>
    </Container>
  );
};

export default UserInfo;
