import "./style.sass";
import { MainButton } from "../Forms/Button";
import { Link } from "react-router-dom";

function ColumnsSection() {
  return (
    <div className="columns-section">
      <div className="columns-section__1">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
        <div>9</div>
        <div>10</div>
        <div>11</div>
        <div>12</div>
      </div>

      <div className="columns-section__2">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
        <div>9</div>
        <div>10</div>
        <div>11</div>
        <div>12</div>
      </div>

      <Link to="/template" className="columns-section_btn">
        <MainButton direction="Следующая задача" />
      </Link>
    </div>
  );
}

export default ColumnsSection;
