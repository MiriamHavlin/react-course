import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useOnlineStatus from '../hooks/useOnlineStatus';

function CreateSurvey(props) {
    const { setSurveys } = props;
    const navigate = useNavigate();
    const isOnline = useOnlineStatus();
    let surveyName = '';
    const [newSurvey, setNewSurvey] = useState(null);
    const port = process.env.REACT_APP_API_SERVER_PORT;
    const url = process.env.REACT_APP_API_SERVER_URL;
    async function postData() {
        const res = await fetch(`${url}:${port}/api/surveys`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newSurvey)
        });
        const data = await res.json();
        if (data.code > 0) {
            setSurveys(prevSurveys => prevSurveys.concat(data));
            navigate('/surveys');
        }
    }
    useEffect(() => {
        //required for the first render because useEffect is always called in the first render
        if (newSurvey == null) return;
        postData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [newSurvey])

    // const [isOnline, setIsOnline] = useState(true);
    // useEffect(() => {
    //     function handleOnline() {
    //         console.log('online');
    //         setIsOnline(true);
    //     }
    //     function handleOffline() {
    //         console.log('offline');
    //         setIsOnline(false);
    //     }
    //     window.addEventListener('online', handleOnline);
    //     window.addEventListener('offline', handleOffline);
    //     return () => {
    //         window.removeEventListener('online', handleOnline);
    //         window.removeEventListener('offline', handleOffline);
    //     };
    // }, []);


    return (<>
        <input onBlur={(e) => surveyName = e.target.value}></input>
        <button type="button" onClick={e => {
            // const copySurveys = [...props.surveys, { name: surveyName }];
            setNewSurvey({ name: surveyName })
        }} >{isOnline ? 'Add' : 'Trying to connect...'}</button>
    </>);
}

export default CreateSurvey;