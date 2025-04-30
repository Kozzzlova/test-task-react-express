import { colors } from "@/shared/styles/colors"
import { styled } from "styled-components"

type StyledCellProps = {
  $status?: "Pending" | "Won" | "Lost"
}

const BodyRow = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  &:not(:last-child) {
    border-bottom: 1px solid ${colors.primary};
  }

  @media (max-width: 767px) {
    grid-template-columns: minmax(120px, auto);
    grid-template-rows: repeat(6, 1fr);
    &:not(:last-child) {
      border-bottom: none;
    }
  }
`

const Cell = styled.div<StyledCellProps>`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.accent};
  color: ${(props) => {
    switch (props.$status) {
      case "Pending":
        return colors.statusPending
      case "Won":
        return colors.statusWon
      case "Lost":
        return colors.statusLost
      default:
        return colors.black
    }
  }};
  &:nth-child(odd) {
    font-weight: 600;
    background-color: ${colors.primary};
  }
`

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.primary};
  color: ${colors.accent};
  font-weight: 600;
  padding: 8px;
  border-radius: 9px;
  transition: background-color 0.2s ease 0s;

  &:hover {
    background-color: ${colors.secondary};
  }

  &:active {
    background-color: ${colors.buttonActive};
  }
`

export const S = {
  BodyRow,
  Cell,
  Button,
}
