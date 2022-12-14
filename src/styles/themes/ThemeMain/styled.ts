import styled from "styled-components";

export const Container = styled.div<{
  img?: string;
  pos?: string;
  img2?: string;
}>`
  max-width: 1240px;
  min-height: 100vh;
  margin: auto;
  padding: 10px;
  padding-bottom: 20px;
  box-sizing: content-box;
  background: ${(props) => (props.img ? `url(${props.img})` : "#f5f5f5")} right
    top / 872px no-repeat;
  background-size: 752px;
  background-position: ${(props) => props.pos ?? "left top"};

  .subContainer {
    max-width: 980px;
    width: 100%;
    height: inherit;
    margin: auto;
  }

  @media (max-width: 980px) {
    padding: 0;

    background: ${(props) =>
        props.img2 ? `url(${props.img2})` : `url(${props.img})`}
      no-repeat;

    background-size: ${(props) => (props.img2 ? "40%" : "83%")};

    background-position: ${(props) =>
      props.img2 ? "left bottom" : "right bottom"};

    background-color: ${(props) => (props.img ? "var(--bg-color)" : "#f5f5f5")};
  }
`;
