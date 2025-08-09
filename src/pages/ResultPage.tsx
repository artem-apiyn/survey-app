import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../store';
import { questions } from '../data/questions';
import { deleteOptions } from '../store/slices/quizSlice';
import { startQuestions } from '../store/slices/navigationSlice';
import { RepeatWrapper } from '../styled/Shared.styled';

const ResultPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const allAnswers = useSelector((state: RootState) => state.quiz);

  const goToSurveyPage = () => {
    navigate('/');
  };

  const handleRepeat = () => {
    dispatch(deleteOptions());
    dispatch(startQuestions());
    goToSurveyPage();
  };

  return (
    <>
      <h2>Результат опроса:</h2>
      {Object.entries(allAnswers).map(([id, obj]) => {
        const questionIndex = Number(id) - 1;
        const question = questions[questionIndex];

        if (!question) return null;

        return (
          <div key={id}>
            <h3>{question.title}</h3>
            <div>
              Вы ответили:{' '}
              {obj.skipped
                ? 'Затрудняюсь ответить / Не помню'
                : Array.isArray(obj.answers)
                ? obj.answers.join(', ')
                : String(obj.answers)}
            </div>
          </div>
        );
      })}
      <RepeatWrapper className="next-button" onClick={handleRepeat}>
        Пройти заново
      </RepeatWrapper>
    </>
  );
};

export default ResultPage;
