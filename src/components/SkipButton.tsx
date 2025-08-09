import React from "react";
import { SkipButtonWrapper } from "../styled/Shared.styled";
interface SkipButtonProps {
  onSkip: () => void;
}
const SkipButton = ({onSkip}: SkipButtonProps) => {
    return (
        <SkipButtonWrapper onClick={onSkip} type="button">Затрудняюсь ответить / Не помню</SkipButtonWrapper>
    )
}
export default SkipButton