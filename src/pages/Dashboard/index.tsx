import React, { useContext, useState } from 'react';
import Loading from 'react-loader-spinner';

import { FiSearch } from 'react-icons/fi';
import { UserContext } from '../../hooks/user';

import Button from '../../components/Button';
import Input from '../../components/Input';
import ListItem from '../../components/ListItem';
import UserInfo from '../../components/UserInfo';

import { Title, Form, Repositories, Content } from './styles';
import Error from '../../components/Error';

const Dashboard = () => {
  const {
    userInfo,
    repositories,
    isLoading,
    errorMessage,
    setUserData,
  } = useContext(UserContext);

  const [user, setUser] = useState('');

  const shouldShowUserInfo = !!userInfo.name && !isLoading && !errorMessage;

  return (
    <>
      <Title>Explore repositórios no GitHub</Title>
      <Form onSubmit={e => setUserData(user, e)}>
        <Input
          placeholder="Digite o nome do usuário"
          type="text"
          onChange={e => setUser(e.target.value)}
        />
        <Button type="submit">
          <FiSearch size={30} />
        </Button>
      </Form>
      <Content>
        {errorMessage && <Error message={errorMessage} />}
        {isLoading && (
          <Loading type="ThreeDots" height={60} width={60} color="#04d361" />
        )}
        {shouldShowUserInfo && (
          <>
            <UserInfo {...userInfo} />
            <Repositories>
              {repositories.map(
                ({ id, name, description, stargazers_count }) => (
                  <ListItem
                    key={id}
                    id={id}
                    title={name}
                    subtitle={description}
                    stargazers={stargazers_count}
                  />
                ),
              )}
            </Repositories>
          </>
        )}
      </Content>
    </>
  );
};

export default Dashboard;
