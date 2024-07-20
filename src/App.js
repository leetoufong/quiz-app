import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './templates/Layout';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Summary from './pages/Summary';
import './App.css';

const App = () => {
    const [name, setName] = useState('');
    const [data, setData] = useState(undefined);
    const [quiz, setQuiz] = useState(undefined);
    const [questionsAnswered, setQuestionsAnswered] = useState(0);
    const [maxQuestions] = useState(15);

    useState(() => {
        // Get data
        fetch('./json/quiz.json')
            .then((response) => response.json())
            .then((data) => {
                setData(data);

                const newQuiz = [];

                while (newQuiz.length < maxQuestions) {
                    const randomNumber = Math.floor(Math.random() * data.length);
                    const randomQuestion = data[randomNumber];

                    // if (!newQuiz.filter((item) => item.question == randomQuestion.question).length) {
                    if (!newQuiz.includes(randomQuestion)) {
                        newQuiz.push(randomQuestion);
                    }
                }

                setQuiz(newQuiz);
            });
    }, []);

    return (
        <div className="App">
            <Routes>
				<Route element={<Layout name={name} questionsAnswered={questionsAnswered} maxQuestions={maxQuestions} />}>
					<Route index element={<Home name={name} setName={setName} />} />
					<Route path="quiz" element={<Quiz setQuestionsAnswered={setQuestionsAnswered} quiz={quiz} setQuiz={setQuiz} questionsAnswered={questionsAnswered} maxQuestions={maxQuestions} />} />
					<Route path="summary" element={<Summary name={name} quiz={quiz} />} />
				</Route>
			</Routes>
        </div>
    );
}

export default App;
