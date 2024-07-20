import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = (props) => {
    const { setName } = props;
    const [currentName, setCurrentName] = useState('');
    const navigate = useNavigate();
    const handleNameChange = (val) => {
        setCurrentName(val);
    }

    return (
        <form className="flex items-center justify-center flex-col h-[50vh]" onSubmit={(event) => {
            event.preventDefault();
            if (!!currentName) {
                setName(currentName);
                navigate('/quiz');
            }
        }}>
            <label className="text-[4rem] mb-4" htmlFor="name">Nyob zoo, koj hu li cas?</label>
            <div>
                <input id="name" className="w-[400px] text-2xl border-2 border-gray-400 rounded p-4" type="text" placeholder="Your name..." onChange={(event) => handleNameChange(event.target.value)} />
            </div>
        </form>
    )
}

export default Home;