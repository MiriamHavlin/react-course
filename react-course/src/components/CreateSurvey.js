import { useEffect } from 'react';
import { useState } from 'react';

function CreateSurvey(props) {
    const { setSurveys } = props;
    let surveyName = '';
    const [newSurvey, setNewSurvey] = useState(null);
    async function postData() {
        const res = await fetch('http://localhost:3000/api/surveys', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newSurvey)
        });
        const data = await res.json();
        if (data.code > 0) {
            setSurveys(prevSurveys => prevSurveys.concat(data));
        }
    }
    useEffect(() => {
        //required for the first render because useEffect is always called in the first render
        if (newSurvey == null) return;
        postData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [newSurvey])

    return (<>
        <input onBlur={(e) => surveyName = e.target.value}></input>
        <button type="button" onClick={e => {
            // const copySurveys = [...props.surveys, { name: surveyName }];
            setNewSurvey({ name: surveyName })
        }} >Add</button>
    </>);
}

export default CreateSurvey;