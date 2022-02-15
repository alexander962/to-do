import "./style.sass";
import { Link } from "react-router-dom";

export const MainButton = ({ direction, to }) => {
  return <div className="btn-main">{direction}</div>;
};
