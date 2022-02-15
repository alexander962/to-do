import "./style.sass";
import { MainButton } from "../Forms/Button";
import { Link } from "react-router-dom";

function TemplateSection() {
  return (
    <div className="template-section">
      <header className="template-section__header">Header</header>
      <main className="template-section__main">Main</main>
      <nav className="template-section__nav">Nav</nav>
      <footer className="template-section__footer">
        <div className="template-section__btns">
          <Link to="/">
            <MainButton direction="Предыдущая таска" />
          </Link>
          <Link to="/chess-board">
            <MainButton direction="Следующая таска" />
          </Link>
        </div>
      </footer>
    </div>
  );
}

export default TemplateSection;
