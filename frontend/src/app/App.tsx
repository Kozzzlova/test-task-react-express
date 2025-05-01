import BetTable from "@/entities/BetTable/BetTable"
import { FallingIcons } from "@/features/FallingIcons/FallingIcons"
import { S } from "./App.styles"
import { ToggleAnimation } from "@/features/ToggleAnimation/ToggleAnimation"
import { useAppSelector } from "@/shared/hooks/useAppSelector"
import { selectAnimationShow } from "@/features/FallingIcons/model/selectAnimationShow"

function App() {
  const animationShow = useAppSelector(selectAnimationShow)
  console.log(animationShow);
  
  return (
    <S.Wrapper>
      <ToggleAnimation/>
      { animationShow && <FallingIcons />}
      <S.Container>
        <S.Title> Bet Status Dashboard</S.Title>
        <BetTable />
      </S.Container>
    </S.Wrapper>
  )
}

export default App
