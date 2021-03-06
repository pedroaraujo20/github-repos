import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #ccc;
  padding-bottom: 20px;

  img {
    height: 200px;
    width: 200px;
    border-radius: 50%;
    border: 1px solid #04d361;
    margin-bottom: 15px;
  }

  strong {
    font-size: 20px;
    color: #3d3d4d;
    margin-bottom: 5px;
  }

  span {
    text-align: center;
    font-size: 18px;
  }

  div {
    display: flex;
    flex-direction: row;
    align-items: center;

    svg {
      margin-right: 10px;
    }

    p {
      font-size: 18px;
      color: #a8a8b3;
      margin-top: 4px;
    }
  }
`;
