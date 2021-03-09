import styled from 'styled-components';

export const Container = styled.div`
  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #a8a8b3;
    transition: color 0.2s;
    margin-bottom: 30px;

    &:hover {
      color: #666;
    }

    svg {
      margin-right: 5px;
    }
  }
`;

export const RepositoryInfo = styled.section`
  margin-top: 80px;

  header {
    display: flex;
    align-items: center;

    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;

      @media (max-width: 360px) {
        width: 75px;
        height: 75px;
      }
    }

    div {
      margin-left: 24px;

      strong {
        font-size: 30px;
        color: #3d3d4d;

        @media (max-width: 360px) {
          font-size: 26px;
        }
      }

      p {
        font-size: 18px;
        color: #737380;
        margin-top: 4px;
      }
    }
  }

  ul {
    display: flex;
    list-style: none;
    margin-top: 40px;

    li {
      & + li {
        margin-left: 20px;
      }

      strong {
        display: block;
        font-size: 24px;

        color: #3d3d4d;
      }

      span {
        display: block;
        margin-top: 4px;
        color: #6c6c80;
      }
    }
  }

  a {
    margin-top: 40px;

    button {
      width: 100%;
    }
  }
`;
