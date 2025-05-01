import { colors } from "@/shared/styles/colors"
import { styled } from "styled-components"

const Toggle = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  position: absolute;
  z-index: 10;
  top: 10px;
  right: 10px;
  font-size: 20px;
  font-weight: 500;
  color: ${colors.secondary};
  cursor: pointer;
`

const CheckBox = styled.input`
  width: 20px;
  height: 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  appearance: none;
  border: 1px solid ${colors.primary};
  position: relative;

  &:checked {
    background-color: ${colors.primary};
  }

  &:checked::after {
    content: "✔";
    color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`

export const S = {
  Toggle,
  CheckBox,
}
