import { useState } from 'react';

function CreateSurvey(props) {
    let surveyName = '';

    return (<>
        <input onBlur={(e) => surveyName = e.target.value}></input>
        <button type="button" onClick={e => {
            // const copySurveys = [...props.surveys, { name: surveyName }];
            props.setSurveys(prevSurveys => prevSurveys.concat({ name: surveyName }));
        }} >Add</button>
    </>);
}

export default CreateSurvey;