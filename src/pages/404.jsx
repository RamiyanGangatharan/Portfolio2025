import { Link } from 'react-router-dom';

function PageNotFound() {
  return (
    <main className="d-flex flex-column justify-content-center align-items-center text-center min-vh-100">
      <h1 className="display-1 intro-name mb-4">404</h1>
      <p className="lead intro-name mb-4">Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" className="cta-btn" title="Back to Home">
        Go to Homepage
      </Link>
    </main>
  );
}

export default PageNotFound;
