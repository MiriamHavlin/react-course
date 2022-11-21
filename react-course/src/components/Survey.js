function Survey(props) {
    const { name, lastDate, answers } = props;

    return (
        <div>
            <h1>Survey Component</h1>
            <h2>Name of Survey: {name}</h2>
            {lastDate >= new Date() ?
                <span>active until {lastDate.toDateString()}</span> :
                <span>the survey is inactive</span>}
            <br />
            {answers >= 3000 && <span>Popular Survey!</span>}

            <br />
            <button onClick={(e) => console.log('Thank You!!!')}>Send</button>
        </div>
    );
}
Survey.defaultProps = { answers: 0, lastDate: new Date() }

export default Survey;