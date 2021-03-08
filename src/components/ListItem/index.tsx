import React from 'react';
import { FiChevronRight, FiStar } from 'react-icons/fi';

import { Item, Stargazers, TitleContainer } from './styles';

interface ListItemProps {
  id: number;
  title: string;
  subtitle: string | null;
  stargazers: number;
}

const ListItem = ({ id, title, subtitle, stargazers }: ListItemProps) => (
  <Item to={`/repository/${id}`}>
    <div>
      <TitleContainer>
        <strong>{title}</strong>
        <Stargazers>
          <FiStar size={20} />
          <span>{stargazers}</span>
        </Stargazers>
      </TitleContainer>
      <p>{subtitle}</p>
    </div>

    <FiChevronRight size={20} />
  </Item>
);

export default ListItem;
