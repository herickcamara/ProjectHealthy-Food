import styled from "styled-components";

export const Container = styled.div`
  max-width: 1440px;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  header {
    padding: 40px;
    justify-content: spece-between;
    color: var(--color-h2);

    ul {
      width: auto;
      flex: 0;
      padding: 10px 0px;
    }
  }
`;
export const SubContainer = styled.div`
  flex: 1;
  max-width: 980px;
  width: 90%;
  display: flex;
  margin: auto;

  align-items: center;
  justify-content: center;
`;
