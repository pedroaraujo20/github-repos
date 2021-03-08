import React, { useContext, useMemo, useState } from 'react';
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

  const shouldShowUserData = useMemo(
    () => !!userInfo.name && !isLoading && !errorMessage,
    [userInfo.name, isLoading, errorMessage],
  );

  const orderedRepositories = repositories.sort((a, b) => {
    if (a.stargazers_count < b.stargazers_count) return 1;
    if (a.stargazers_count > b.stargazers_count) return -1;
    return 0;
  });

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
        {shouldShowUserData && (
          <>
            <UserInfo {...userInfo} />
            <Repositories>
              {orderedRepositories.map(
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
