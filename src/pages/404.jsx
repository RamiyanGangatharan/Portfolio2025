import { Link } from "react-router-dom";

/**
 * `PageNotFound` is a fallback component displayed when a user navigates
 * to a route that doesn't exist. It shows a 404 error message and a link
 * to return to the homepage.
 *
 * @component
 * @returns {JSX.Element} A 404 error page with navigation back to the homepage.
 */
function PageNotFound() {
  return (
    <div className="home-container" aria-label="Page not found">
      <h1 className="display-1 intro-name mb-3">404</h1>
      <p className="lead mb-4 intro-name">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link to="/" className="cta-btn" title="Back to Homepage">
        Go to Homepage
      </Link>
    </div>
  );
}

export default PageNotFound;
