function Survey() {
    const name= 'Elections 2022';
    return (
        <div>
            <h1>Survey Component</h1>
            <h2>Name of Survey: {name}</h2>
            <button onClick={(e) => console.log('Thank You!!!')}>Send</button>
        </div>
    );
}

export default Survey;