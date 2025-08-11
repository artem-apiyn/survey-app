import React, { useCallback } from "react";
import { SkipButtonWrapper } from "../styled/Shared.styled";
interface SkipButtonProps {
  onSkip: () => void;
}
const SkipButton = ({onSkip}: SkipButtonProps) => {
    const handleClick = useCallback(() => {
      onSkip();
    }, [onSkip]);
    return (
      <SkipButtonWrapper onClick={handleClick} type="button" role="button" >
        Затрудняюсь ответить / Не помню
      </SkipButtonWrapper>
    )
}
export default React.memo(SkipButton)