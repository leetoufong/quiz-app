const Header = (props) => {
    const { name, questionsAnswered, maxQuestions } = props;

    return (
        <>
            {name && (
                <header className="text-xl w-full h-[42px] flex justify-between px-4 py-2 border-b-2">
                    <p>Questions: <strong>{questionsAnswered < 15 ? questionsAnswered + 1 : 15} / {maxQuestions}</strong></p>
                    <h1>Nyob zoo, <strong>{name && name}</strong></h1>
                </header>
            )}
        </>
    )
}

export default Header;
