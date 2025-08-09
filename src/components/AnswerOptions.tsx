import React, { useCallback } from "react";
import OptionItem from "./OptionItem";
import { questions } from "../data/questions";
import SkipButton from "./SkipButton";
import { useDispatch } from "react-redux";
import { skipOptions, toggleOption } from "../store/slices/quizSlice";
import { AnswerOptionsWrapper } from "../styled/Shared.styled";
import { nextQuestion } from "../store/slices/navigationSlice";
import { QuestionState } from "../types/qustion";

interface AnswerOptionsProps {
    questionId: number;
    selectedOptions: QuestionState;
    goToResultPage: () => void;
}

const AnswerOptions = ({ questionId, selectedOptions, goToResultPage }: AnswerOptionsProps) => {
    const dispatch = useDispatch();
    const currentQuestion = questions[questionId];

    const handleOptionChange = useCallback(
        (value: string, checked: boolean) => {
            dispatch(
                toggleOption({
                    questionId: currentQuestion.id,
                    value,
                    checked,
                    type: currentQuestion.type,
                })
            );
        },
        [dispatch, currentQuestion.id, currentQuestion.type]
    );

    const handleSkip = useCallback(() => {
        dispatch(skipOptions({ questionId: currentQuestion.id }));
        if (questionId === questions.length - 1) {
            goToResultPage();
        } else {
            dispatch(nextQuestion());
        }
    }, [dispatch, currentQuestion.id, questionId, goToResultPage]);

    return (
        <>
            <AnswerOptionsWrapper>
                {currentQuestion.options.map((item) => (
                    <OptionItem
                        key={item.id}
                        label={item.text}
                        value={item.text}
                        type={currentQuestion.type}
                        checked={selectedOptions.answers.includes(item.text)}
                        onChange={handleOptionChange}
                    />
                ))}
            </AnswerOptionsWrapper>
            <SkipButton onSkip={handleSkip} />
        </>
    );
};

export default React.memo(AnswerOptions);
