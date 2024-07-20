const QuestionController = (props) => {
    const { currentCard, prevCard, nextCard, handleCorrectAnswer, handlePrev, handleNext } = props;

    return (
        <nav className="answer flex items-center justify-center absolute left-0 bottom-0 border-t-4 w-full px-4 py-2">
            <ul className="w-full flex justify-center">
                {/* <li className="">
                    <button className="border rounded p-3 bg-gray-200 font-bold text-black opacity-25" disabled={true} onClick={() => {
                        handlePrev();
                    }}>Previous</button>
                </li> */}
                <li className="">
                    <button className="border rounded p-3 bg-green-500 font-bold text-white mr-1" onClick={() => {
                        handleCorrectAnswer(true);
                    }}>Correct</button>
                    <button className="border rounded p-3 bg-orange-500 font-bold text-black ml-1" onClick={() => {
                        handleCorrectAnswer(false);
                    }}>Incorrect</button>
                </li>
                {/* <li className="">
                    <button className="border rounded p-3 bg-gray-200 font-bold text-black opacity-25" disabled={true} onClick={() => {
                        handleNext();
                    }}>Next</button>
                </li> */}
            </ul>
        </nav>
    )
}

export default QuestionController;
