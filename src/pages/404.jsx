import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div className="home-container" aria-label="Page not found">
      <h1 className="display-1 intro-name mb-3">404</h1>
      <p className="lead mb-4 intro-name">Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" className="cta-btn" title="Back to Homepage">Go to Homepage</Link>
    </div>
  );
}

export default PageNotFound;
