import { Link } from 'react-router-dom';
function ErrorPage() {
    return (
        <>
            <h1>We are so sorry!</h1>
            <Link to="/">Back to Home Page</Link>
        </>
    );
}

export default ErrorPage;