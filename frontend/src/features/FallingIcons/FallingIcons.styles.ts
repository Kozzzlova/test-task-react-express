import styled, { keyframes } from "styled-components"

type Props = {
  $delay: number
  $left: number
  $duration: number
}

const fall = keyframes`
  0% {
    transform: translateY(-100px) rotate(0deg);
    opacity: 1;
  }
  70% {
    opacity: 0.8;
  }
  100% {
    transform: translateY(100vh) rotate(360deg);
    opacity: 0;
  }
`

const Icon = styled.img<Props>`
  position: fixed;
  top: -50px;
  left: ${({ $left }) => $left}vw;
  width: 50px;
  height: 50px;
  animation: ${fall} ${({ $duration }) => $duration}s linear infinite;
  animation-delay: ${({ $delay }) => $delay}s;
  pointer-events: none;
  z-index: 1;
`

export const S = {
  Icon,
}
