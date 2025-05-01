import { setAnimation } from "../FallingIcons/model/animationSlice";
import { S } from "./ToggleAnimation.styles";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch";

export const ToggleAnimation = () => {
    const dispatch = useAppDispatch()

    const toggleAnimationHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setAnimation(e.currentTarget.checked))
    }
    return (
        <S.Toggle>
            <span>Toggle animation</span>
            <S.CheckBox type="checkbox" onChange={toggleAnimationHandler}/>
        </S.Toggle>
    );
};

