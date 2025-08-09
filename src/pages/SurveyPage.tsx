import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { questions } from '../data/questions';
import { nextQuestion } from '../store/slices/navigationSlice';
import { useNavigate } from 'react-router-dom';
import { AnswerOptions, ShareLink, ProgressBar } from '../components';
import { AnswerTypeWrapper, OptionTypeWrapper } from '../styled/Shared.styled';

const ServeyPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const allAnswers = useSelector((state: RootState) => state.quiz);
  const currentId = useSelector(
    (state: RootState) => state.navigation.currentQuestionId
  );

  const currentQuestion = questions[currentId];
  const selectedOptions =
    allAnswers[currentQuestion.id] || { answers: [], skipped: false };

  const goToResultPage = () => {
    navigate('/result');
  };

  const handleNext = () => {
    if (currentId + 1 === questions.length) {
      goToResultPage();
    } else {
      dispatch(nextQuestion());
    }
  };

  return (
    <>
      <div className='survey-page'>
        <OptionTypeWrapper>
          1.{currentId + 1}.{' '}
          {currentQuestion.type === 'checkbox'
            ? 'Несколько вариантов'
            : 'Один вариант'}
        </OptionTypeWrapper>

        <ShareLink />

        <h1>{currentQuestion.title}</h1>

        <AnswerTypeWrapper className='option-item'>
          <i>
            {currentQuestion.type === 'checkbox'
              ? 'Несколько ответов'
              : 'Один ответ'}
          </i>
        </AnswerTypeWrapper>

        <AnswerOptions
          goToResultPage={goToResultPage}
          selectedOptions={selectedOptions}
          questionId={currentId}
        />
      </div>

      <ProgressBar
        disabled={selectedOptions.answers.length === 0}
        totalPages={questions.length}
        currentPage={currentId}
        onNext={handleNext}
      />
    </>
  );
};

export default ServeyPage;
