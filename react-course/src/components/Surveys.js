
import { Link } from 'react-router-dom';

function Surveys(props) {
    return (
        <>
            <h1>Available Surveys</h1>
            <ul>
                {props.surveys.map(s => <li key={s.code}>
                    <Link to={`/surveys/${s.code}`}>{s.name}</Link>
                    <br />
                </li>)}
            </ul>
        </>
    )
}

export default Surveys;