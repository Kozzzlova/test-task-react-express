import { colors } from "@/shared/styles/colors"
import styled from "styled-components"

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
`

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 30px 15px;
  margin: 0 auto;
`

const Title = styled.h1`
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 24px;
  text-align: center;
  color: ${colors.secondary};
  @media (max-width: 767px) {
    font-size: 24px;
  }
`

export const S = {
  Wrapper,
  Container,
  Title,
}
