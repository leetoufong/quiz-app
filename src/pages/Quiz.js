import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import Card from '../components/Card';
import QuestionController from '../components/QuestionController';

const Quiz = (props) => {
    const { quiz, setQuiz, questions, setQuestions, questionsAnswered, setQuestionsAnswered, maxQuestions } = props;
    const [ currentCard, setCurrentCard ] = useState(quiz && quiz[questionsAnswered]);
    const [ prevCard, setPrevCard ] = useState(undefined);
    const [ nextCard, setNextCard ] = useState(quiz && quiz[questionsAnswered + 1]);
    const navigate = useNavigate();

    useEffect(() => {
        if (!quiz) navigate('/');
    }, []);

    useEffect(() => {
        if (questionsAnswered >= maxQuestions) navigate('/summary');
    }, [questionsAnswered]);

    const handleCorrectAnswer = (bool) => {
        const newQuiz = quiz;
        const newCard = currentCard;

        newCard.correct = bool;
        newQuiz.map((item) => {
            if (newCard.question == item.question) {
                item = newCard;
            }
        });

        setQuestionsAnswered(questionsAnswered + 1);
        setCurrentCard(newQuiz[questionsAnswered + 1]);
        setQuiz(newQuiz);
    };

    const handlePrev = () => {
        setCurrentCard(quiz[questionsAnswered - 1]);
    };

    const handleNext = () => {
        setCurrentCard(quiz[questionsAnswered + 1]);
    };

    return (
        <>
            {currentCard && (
                <section className="quiz">
                    <Card currentCard={currentCard} />

                    <QuestionController currentCard={currentCard} prevCard={prevCard} nextCard={nextCard} handleCorrectAnswer={handleCorrectAnswer} handlePrev={handlePrev} handleNext={handleNext} />
                </section>
            )}
        </>
    )
}

export default Quiz;
