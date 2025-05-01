import { useAppSelector } from "@/shared/hooks/useAppSelector"
import { setAnimation } from "../FallingIcons/model/animationSlice"
import { S } from "./ToggleAnimation.styles"
import { useAppDispatch } from "@/shared/hooks/useAppDispatch"
import { selectAnimationShow } from "../FallingIcons/model/selectAnimationShow"

export const ToggleAnimation = () => {
  const dispatch = useAppDispatch()
  const animationShow = useAppSelector(selectAnimationShow)
  

  const toggleAnimationHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setAnimation(e.currentTarget.checked))
  }
  return (
    <S.Toggle>
      <span>Toggle animation</span>
      <S.CheckBox type="checkbox" onChange={toggleAnimationHandler} checked={ animationShow} />
    </S.Toggle>
  )
}
