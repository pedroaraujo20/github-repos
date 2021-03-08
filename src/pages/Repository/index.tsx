import React, { useContext } from 'react';
import { FiChevronLeft } from 'react-icons/fi';
import { Link, useRouteMatch } from 'react-router-dom';
import Button from '../../components/Button';
import Error from '../../components/Error';

import { UserContext } from '../../hooks/user';

import { Container, RepositoryInfo } from './styles';

interface RepositoryParams {
  repository: string;
}

const Repository = () => {
  const {
    userInfo: { avatar_url, name },
    repositories,
  } = useContext(UserContext);

  const { params } = useRouteMatch<RepositoryParams>();

  const repository = repositories.find(
    repo => repo.id === Number(params.repository),
  );

  return (
    <Container>
      <Link to="/">
        <FiChevronLeft size={16} />
        Voltar
      </Link>

      {repository ? (
        <>
          <RepositoryInfo>
            <header>
              <img src={avatar_url} alt={name} />
              <div>
                <strong>{repository.name}</strong>
                <p>{repository.description}</p>
              </div>
            </header>
            <ul>
              <li>
                <strong>{repository.stargazers_count}</strong>
                <span>Stars</span>
              </li>
              <li>
                <strong>{repository.language}</strong>
                <span>Language</span>
              </li>
              <li>
                <strong>{repository.forks}</strong>
                <span>Forks</span>
              </li>
            </ul>

            <a
              target="_blank"
              href={repository.html_url}
              rel="noopener noreferrer"
            >
              <Button>Ir para o repositório</Button>
            </a>
          </RepositoryInfo>
        </>
      ) : (
        <Error message="Repositório não encontrado" />
      )}
    </Container>
  );
};

export default Repository;
