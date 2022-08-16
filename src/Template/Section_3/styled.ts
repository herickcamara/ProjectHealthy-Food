import styled from "styled-components";

export const Container = styled.div`
  width: 50%;
  height: 100vh;
  position: relative;
  right: 0px;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 0px 10px;
  h2 {
    font-size: 30px;
    color: var(--color-h2);
  }
  p {
    color: #888;
    font-size: 20px;
    margin: 5px 0px;
  }
  @media (max-width: 900px) {
    width: 425px;
  }
  @media (max-width: 470px) {
    width: 100%;
  }
  @media (max-width: 300px) {
    h2 {
      font-size: 25px;
      color: var(--color-h2);
    }
    p {
      color: #888;
      font-size: 18px;
      margin: 5px 0px;
    }
  }
`;
