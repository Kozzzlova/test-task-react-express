import { colors } from "@/shared/styles/colors"
import styled from "styled-components"

const Table = styled.div`
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
  text-align: center;
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
  position: relative;
  z-index: 2;

  @media (max-width: 767px) {
    flex-direction: row;
    width: max-content;
    max-width: 100%;
    overflow-x: scroll;
    &::-webkit-scrollbar {
      width: 8px;
    }

    &::-webkit-scrollbar-track {
      background: transparent;
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${colors.secondary};
      border-radius: 4px;
    }
    scrollbar-width: thin;
    scrollbar-color: ${colors.secondary} transparent;
  }
`

const HeaderRow = styled.div`
  background-color: ${colors.primary};
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  font-size: 20px;
  font-weight: 600;
  color: ${colors.accent};
  text-transform: uppercase;
  div {
    padding: 15px 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 1fr);
    font-size: 16px;
  }
`

const SortCell = styled.div`
display: flex;
gap: 8px;
align-items: center;
justify-content: center;
`

const SortButton = styled.button`
 border-radius: 5px;
  padding: 4px;
  color: ${colors.primary};
  transition: all .2s ease 0s;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.accent};
  &:hover,
  &:active {
    color: ${colors.secondary};
  }
`

export const S = {
  Table,
  HeaderRow,
  SortCell,
  SortButton
}
