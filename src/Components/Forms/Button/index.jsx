import "./style.sass";
import { Link } from "react-router-dom";

export const MainButton = ({ direction, type = "button", onClick }) => {
  return (
    <button type={type} className="btn-main" onClick={onClick}>
      {direction}
    </button>
  );
};
