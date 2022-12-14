import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
  text-align: center;
  h2 {
    margin: 30px 0px;
    font-size: 2rem;
  }
`;
export const ContainerScroll = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 30px 0px;
  .scrollBar {
    width: 100%;
    padding: 10px;
    overflow: hidden;
    min-height: 500px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    .rec-carousel {
      position: relative;
    }
    .rec-slider-container {
      position: initial;
    }

    .rec-pagination {
      display: none;
    }
  }
`;
export const AreaArrowLeft = styled.div<{
  disabled: boolean;
  shadow: boolean;
  right: boolean;
}>`
  width: 100px;
  height: 100%;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  ${(props) => (props.right ? "left:-10px" : "right:-10px")};

  box-shadow: ${(props) =>
    props.shadow
      ? "inset 34px 0px 34px 0px #fff"
      : "inset -34px 0px 34px 0px #fff"};

  display: ${(prosp) => (prosp.disabled ? "none" : "flex")};

  button {
    width: 50px;
    height: 50px;
    font-size:1rem;
    color:var(--bg-button)
    display: flex;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    outline: none;
    border: none;
    background: #fff;
    
    img{
      width:40%;
    }
  }

  @media(max-width:769px){
    display:none;
  }
`;

export const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 250px;
  width: 100%;
  background-color: #000088;
  color: #fff;
  margin: 0px 15px;
  font-size: 4rem;
`;
