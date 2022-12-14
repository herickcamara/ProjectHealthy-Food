import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 50px;
  padding: 40px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    color: var(--color-h1);
  }
  .Menu {
    flex: 1;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: end;
  }

  @media (max-width: 280px) {
    height: auto;
    padding: 10px 0px;
    h1 {
      width: 128px;
      font-size: 20px;
      color: var(--color-h1);
    }
  }
`;
