import React from 'react';

type Props = {
  question: string;
  answer: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: boolean | null;
  questionNumber: number;
  totalQuestions: number;
};

const QuestionCard: React.FC<Props> = ({question, answer, callback, userAnswer, questionNumber, totalQuestions }) => (
  <div>
    <p className="number">
      Question: {questionNumber} / {totalQuestions}
    </p>
    <p dangerouslySetInnerHTML={{ __html: question }} />
    <div>
      {answer.map((answer) => (
        <div>
          <button disabled={!!userAnswer} value={answer} onClick={callback}>
            <span dangerouslySetInnerHTML={{ __html: answer }} />
          </button>
        </div>
      ))}
  </div>
  </div>
);

export default QuestionCard;