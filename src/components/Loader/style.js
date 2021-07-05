import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  width: 100px;
  height: 100px;
  text-align: center;
  color: #0d63be;
  @keyframes animation {
    0% {
      stroke-dasharray: 1 98;
      stroke-dashoffset: -105;
    }
    50% {
      stroke-dasharray: 80 10;
      stroke-dashoffset: -160;
    }
    100% {
      stroke-dasharray: 1 98;
      stroke-dashoffset: -300;
    }
  }

  #spinner {
    transform-origin: center;
    animation-name: animation;
    animation-duration: 1.2s;
    animation-timing-function: cubic-bezier;
    animation-iteration-count: infinite;
  }
`;
