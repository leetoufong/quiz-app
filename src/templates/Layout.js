import { Outlet } from 'react-router-dom';
import Header from '../patterns/Header';

const Layout = (props) => {
    const { name, questionsAnswered, maxQuestions } = props;
    return (
        <div className="App">
            <Header name={name} questionsAnswered={questionsAnswered} maxQuestions={maxQuestions} />

            <main id="main" className="p-4" role="main">
                <Outlet />
            </main>
        </div>
    )
}

export default Layout;
