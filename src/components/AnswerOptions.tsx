import React, { useCallback, useMemo } from "react";
import OptionItem from "./OptionItem";
import { questions } from "../data/questions";
import SkipButton from "./SkipButton";
import { useDispatch } from "react-redux";
import { skipOptions, toggleOption } from "../store/slices/quizSlice";
import { AnswerOptionsWrapper } from "../styled/Shared.styled";
import { nextQuestion } from "../store/slices/navigationSlice";
import { QuestionState } from "../types/qustion";

type QuestionType = 'checkbox' | 'radio';

interface AnswerOptionsProps {
    questionId: number;
    selectedOptions: QuestionState;
    goToResultPage: () => void;
}

const AnswerOptions = ({ questionId, selectedOptions, goToResultPage }: AnswerOptionsProps) => {
    const dispatch = useDispatch();

    const currentQuestion = useMemo(() => questions[questionId] ?? null, [questionId]);

    const handleOptionChange = useCallback(
        (value: string, checked: boolean) => {
            if (!currentQuestion) {
                return;
            }
            dispatch(
                toggleOption({
                    questionId: currentQuestion.id,
                    value,
                    checked,
                    type: currentQuestion.type as QuestionType,
                })
            );
        },
        [dispatch, currentQuestion]
    );

    const handleSkip = useCallback(() => {
        if (!currentQuestion) {
            return;
        }
        dispatch(skipOptions({ questionId: currentQuestion.id }));
        if (questionId === questions.length - 1) {
            goToResultPage();
        } else {
            dispatch(nextQuestion());
        }
    }, [dispatch, currentQuestion, questionId, goToResultPage]);

    if (!currentQuestion) {
        return null;
    };

    return (
        <>
            <AnswerOptionsWrapper>
                {currentQuestion.options.map((item) => (
                    <OptionItem
                        key={item.id}
                        label={item.text}
                        value={item.text}
                        type={currentQuestion.type as QuestionType}
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