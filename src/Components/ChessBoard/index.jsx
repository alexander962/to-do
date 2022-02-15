import "./style.sass";
import { MainButton } from "../Forms/Button";
import { Link } from "react-router-dom";

function ChessBoard() {
  return (
    <div className="chess-board">
      <div className="chess-board__main">
        <div className="chess-board__block chess-board__block_white"></div>
        <div className="chess-board__block"></div>
        <div className="chess-board__block chess-board__block_white"></div>
        <div className="chess-board__block"></div>
        <div className="chess-board__block chess-board__block_white"></div>
        <div className="chess-board__block"></div>
        <div className="chess-board__block chess-board__block_white"></div>
        <div className="chess-board__block"></div>
        <div className="chess-board__block"></div>
        <div className="chess-board__block chess-board__block_white"></div>
        <div className="chess-board__block"></div>
        <div className="chess-board__block chess-board__block_white"></div>
        <div className="chess-board__block"></div>
        <div className="chess-board__block chess-board__block_white"></div>
        <div className="chess-board__block"></div>
        <div className="chess-board__block chess-board__block_white"></div>
        <div className="chess-board__block chess-board__block_white"></div>
        <div className="chess-board__block"></div>
        <div className="chess-board__block chess-board__block_white"></div>
        <div className="chess-board__block"></div>
        <div className="chess-board__block chess-board__block_white"></div>
        <div className="chess-board__block"></div>
        <div className="chess-board__block chess-board__block_white"></div>
        <div className="chess-board__block"></div>
        <div className="chess-board__block"></div>
        <div className="chess-board__block chess-board__block_white"></div>
        <div className="chess-board__block"></div>
        <div className="chess-board__block chess-board__block_white"></div>
        <div className="chess-board__block"></div>
        <div className="chess-board__block chess-board__block_white"></div>
        <div className="chess-board__block"></div>
        <div className="chess-board__block chess-board__block_white"></div>
        <div className="chess-board__block chess-board__block_white"></div>
        <div className="chess-board__block"></div>
        <div className="chess-board__block chess-board__block_white"></div>
        <div className="chess-board__block"></div>
        <div className="chess-board__block chess-board__block_white"></div>
        <div className="chess-board__block"></div>
        <div className="chess-board__block chess-board__block_white"></div>
        <div className="chess-board__block"></div>
        <div className="chess-board__block"></div>
        <div className="chess-board__block chess-board__block_white"></div>
        <div className="chess-board__block"></div>
        <div className="chess-board__block chess-board__block_white"></div>
        <div className="chess-board__block"></div>
        <div className="chess-board__block chess-board__block_white"></div>
        <div className="chess-board__block"></div>
        <div className="chess-board__block chess-board__block_white"></div>
        <div className="chess-board__block chess-board__block_white"></div>
        <div className="chess-board__block"></div>
        <div className="chess-board__block chess-board__block_white"></div>
        <div className="chess-board__block"></div>
        <div className="chess-board__block chess-board__block_white"></div>
        <div className="chess-board__block"></div>
        <div className="chess-board__block chess-board__block_white"></div>
        <div className="chess-board__block"></div>
        <div className="chess-board__block"></div>
        <div className="chess-board__block chess-board__block_white"></div>
        <div className="chess-board__block"></div>
        <div className="chess-board__block chess-board__block_white"></div>
        <div className="chess-board__block"></div>
        <div className="chess-board__block chess-board__block_white"></div>
        <div className="chess-board__block"></div>
        <div className="chess-board__block chess-board__block_white"></div>
      </div>

      <div className="chess-board__btns">
        <Link to="/template">
          <MainButton direction="Предыдущая таска" />
        </Link>
        <Link to="/float">
          <MainButton direction="Следующая таска" />
        </Link>
      </div>
    </div>
  );
}

export default ChessBoard;
