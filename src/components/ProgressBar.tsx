import React from "react";
import { NextButton, ProgressContainer, ProgressFill } from "../styled/Shared.styled";

interface ProgressProps {
  currentPage: number;
  totalPages: number;
  onNext: () => void;
  disabled: boolean
}

const ProgressBar = ({ currentPage, totalPages, onNext, disabled }: ProgressProps) => {
    const percent = ((currentPage + 1) / totalPages) * 100;

    return (
        <ProgressContainer>
        <ProgressFill percent={percent} />
        <NextButton className="next-button" disabled = {disabled} onClick={onNext}>{currentPage + 1 === totalPages ? 'Завершить' : 'Далее'}</NextButton>
        </ProgressContainer>
    );
};

export default React.memo(ProgressBar);

