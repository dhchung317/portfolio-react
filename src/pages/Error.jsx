import { Link } from 'react-router-dom';
export default function Error() {
  return (
    <section className="page-shell">
      <header className="page-heading">
        <h1>Page not found</h1>
        <p>
          <Link to="/">Return home</Link>
        </p>
      </header>
    </section>
  );
}
