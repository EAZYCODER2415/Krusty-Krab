import { Link } from 'react-router-dom';
import '../styles/main.css';

const NotFound = () => {
  return (
    <main>
      <section className="error">
        <h1>ERROR 404</h1>
        <h3>The page where you&apos;re trying to go isn&apos;t available or invalid, maybe you&apos;re lost here...</h3>
        <Link to="/"><button type="button">Back to Home</button></Link>
        <br />
        <img className="error-guy" src="/media/spongebob.png" alt="404-guy" />
      </section>
    </main>
  );
};

export default NotFound;