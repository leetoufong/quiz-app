import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

const Summary = (props) => {
    const { name, quiz  } = props;
    const [ correct, setCorrect ] = useState(0);
    const [ incorrect, setIncorrect ] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        if (!quiz) navigate('/');

        setCorrect(quiz?.filter((item) => item.correct).length);
        setIncorrect(quiz?.filter((item) => !item.correct).length);
    }, []);

    return (
        <div className="summary flex items-center justify-center flex-col h-[50vh]">
            {name && <h2 className={`text-[6rem] mb-4`}>Summary for <strong>{name}</strong></h2>}

            <p className="text-4xl mb-4 text-gray-500">Correct Answers: <span className="text-green-500">{correct}</span></p>
            <p className="text-4xl mb-4 text-gray-500">Incorrect Answers: <span className="text-orange-500">{incorrect}</span></p>
        </div>
    )
}

export default Summary