import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Item = styled(Link)`
  background: #fff;
  border-radius: 5px;
  width: 100%;
  padding: 24px;
  display: block;
  text-decoration: none;

  display: flex;
  align-items: center;
  transition: transform 0.2s;

  & + a {
    margin-top: 16px;
  }

  &:hover {
    transform: translateX(10px);
  }

  div {
    strong {
      font-size: 20px;
      color: #3d3d4d;
    }

    p {
      font-size: 18px;
      color: #a8a8b3;
      margin-top: 4px;
    }
  }

  svg {
    margin-left: auto;
    color: #cbcbd6;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Stargazers = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 15px;

  svg {
    margin-right: 3px;
  }

  span {
    font-weight: bold;
    color: #3d3d4d;
  }
`;
