import React from "react";
import { NextButton, ProgressContainer, ProgressFill } from "../styled/Shared.styled";

interface ProgressProps {
  currentPage: number;
  totalPages: number;
  onNext: () => void;
  disabled: boolean
}

const ProgressBar = ({ currentPage, totalPages, onNext, disabled }: ProgressProps) => {
    const percent = totalPages > 0 ? ((currentPage + 1) / totalPages) * 100 : 0;
    const isLastPage = currentPage + 1 === totalPages;

    return (
      <ProgressContainer>
        <ProgressFill $percent={percent} />
        <NextButton
          className="next-button"
          disabled={disabled}
          onClick={onNext}
          aria-disabled={disabled}
          aria-label={isLastPage ? "Завершить опрос" : "Перейти к следующему вопросу"}
        >
          {isLastPage ? "Завершить" : "Далее"}
        </NextButton>
      </ProgressContainer>
    );
};

export default React.memo(ProgressBar);

