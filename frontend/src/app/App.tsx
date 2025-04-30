import BetTable from "@/entities/BetTable/BetTable"
import { FallingIcons } from "@/features/FallingIcons/FallingIcons"
import { S } from "./App.styles"

function App() {
  return (
    <S.Wrapper>
      <FallingIcons />
      <S.Container>
        <S.Title> Bet Status Dashboard</S.Title>
        <BetTable />
      </S.Container>
    </S.Wrapper>
  )
}

export default App
