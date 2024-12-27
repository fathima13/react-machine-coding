import React, { useEffect, useState } from "react";
import { QUIZ_DATA } from "../../constants/quizConstant";
import "./Quiz.css";

const Quiz = () => {
  const [quizData, setQuizData] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0);

  useEffect(() => {
    let updatedQuizData = QUIZ_DATA?.map((ele) => ({
      ...ele,
      incorrect_answers: shuffle([
        ...ele?.incorrect_answers,
        ele?.correct_answer,
      ]),
    }));
    console.log(updatedQuizData);
    setQuizData([...updatedQuizData]);
  }, []);

  const onAnswerClick = (value) => {
    let updatedQuizData = [...quizData];
    updatedQuizData[questionIndex]["selected_answer"] = value;
    setQuizData([...updatedQuizData]);
  };
  const onClickHandler = (type) => {
    setQuestionIndex((prev) => (type === "prev" ? prev - 1 : prev + 1));
  };

  function shuffle(array) {
    let currentIndex = array.length;
    while (currentIndex != 0) {
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    return array;
  }

  const calCulateCorrectAns = () => {
    let correctAns = 0;
    quizData.forEach((element) => {
      if (element.correct_answer === element.selected_answer) correctAns++;
    });
    return correctAns;
  };

  return (
    <>
      <div className="card-container ">
        <div className="card">
          <h3 className="mb-10">{quizData[questionIndex]?.question}</h3>
          <ul className="options">
            {questionIndex < quizData?.length ? (
              <>
                {quizData[questionIndex]?.incorrect_answers?.map((option) => {
                  return (
                    <li key={option}>
                      <button
                        className={`${
                          quizData[questionIndex]?.selected_answer === option
                            ? "on-selected"
                            : ""
                        }`}
                        onClick={() => onAnswerClick(option)}
                      >
                        {option}
                      </button>
                    </li>
                  );
                })}
              </>
            ) : (
              <>
                <div>
                  <h2>Results</h2>
                  <p>
                    You answered {calCulateCorrectAns()} out of{" "}
                    {quizData.length} questions{" "}
                  </p>
                </div>
              </>
            )}
          </ul>
        </div>
      </div>
      {questionIndex < quizData?.length && (
        <div className="action-buttons">
          <button
            className={`action-button ${
              questionIndex === 0 ? "button-disabled" : ""
            }`}
            onClick={() => onClickHandler("prev")}
            disabled={questionIndex === 0}
          >
            Prev
          </button>
          <button
            className="action-button"
            onClick={() => onClickHandler("next")}
          >
            Next
          </button>
        </div>
      )}
    </>
  );
};

export default Quiz;
