import { Link } from 'react-router-dom';
function Home() {
    return (
        <>
            <h1>Surveys Home Page</h1>
            <p>a good explanation about the importance of surveys for democracies</p>
            
            <ul>
                <li><Link to="/surveys">See all surveys</Link></li>
                <li><Link to="/newSurvey">Create a new one</Link></li>
            </ul>
        </>
    )
}

export default Home;