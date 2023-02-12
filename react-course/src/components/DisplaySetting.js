

function DisplaySettings(props) {
    const { setInactiveColor } = props;
    return (
        <>
            <span>Change your settings</span><br />
            <input type="color" onChange={e => setInactiveColor(e.target.value)} />
        </>
    );
}

export default DisplaySettings;