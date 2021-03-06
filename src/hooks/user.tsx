import React, { createContext, FormEvent, useCallback, useState } from 'react';
import api from '../services/api';

export interface UserInfo {
  name: string;
  bio: string;
  email: string | null;
  avatar_url: string;
  following: number;
  followers: number;
}

export interface Repositories {
  id: number;
  name: string;
  description: string | null;
  url: string;
  stargazers_count: number;
  language: string;
}

interface UserContextData {
  userInfo: UserInfo;
  repositories: Repositories[];
  setUserData: (username: string, event: FormEvent<HTMLFormElement>) => void;
  isLoading: boolean;
  errorMessage: string;
}

export const UserContext = createContext<UserContextData>(
  {} as UserContextData,
);

interface UserProviderProps {
  children?: React.ReactNode;
}

export const UserProvider = ({ children }: UserProviderProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [userInfo, setUserInfo] = useState<UserInfo>({} as UserInfo);
  const [repositories, setRepositories] = useState<Repositories[]>(
    [] as Repositories[],
  );
  const [errorMessage, setErrorMessage] = useState('');

  const setUserData = useCallback(
    async (
      username: string,
      event: FormEvent<HTMLFormElement>,
    ): Promise<void> => {
      event.preventDefault();

      setErrorMessage('');
      setIsLoading(true);

      await Promise.all([
        api.get(`users/${username}`),
        api.get(`users/${username}/repos`),
      ])
        .then(data => {
          const [userData, repos] = data;
          setUserInfo(userData.data);
          setRepositories(repos.data);
        })
        .catch(() => setErrorMessage('Usuário não encontrado!'))
        .finally(() => setIsLoading(false));
    },
    [],
  );

  return (
    <UserContext.Provider
      value={{ userInfo, repositories, setUserData, isLoading, errorMessage }}
    >
      {children}
    </UserContext.Provider>
  );
};
