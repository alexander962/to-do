import React, { useState } from "react";
import "./style.sass";
import { MainButton } from "../Forms/Button";
import { Link } from "react-router-dom";

function FormSection() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [date, setDate] = useState("");
  const [info, setInfo] = useState("");
  const [color, setColor] = useState("");
  const [fruit, setFruit] = useState("");
  const [gender, setGender] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const formReset = () => {
    setName("");
    setSurname("");
    setPhoneNumber("");
    setDate("");
    setColor("");
    setFruit("");
    setGender("");

    const form = document.getElementsByClassName("form-section__main")[0];
    form.reset();
  };

  const onValueChange = (e) => {
    setGender(e.target.value);
  };

  return (
    <div className="form-section">
      <form
        className="form-section__main"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <fieldset>
          <legend>Inputs Data</legend>
          <label>
            Name:
            <input
              name="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>

          <label>
            Surname:
            <input
              name="surname"
              type="text"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
            />
          </label>

          <label>
            Phone number:
            <input
              name="phoneNumber"
              type="number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </label>

          <label>
            Date:
            <input
              name="date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </label>

          <label>
            Tell us about yourself:
            <textarea
              name="textarea"
              type="text"
              value={info}
              onChange={(e) => setInfo(e.target.value)}
            />
          </label>
        </fieldset>

        <fieldset>
          <legend>Inputs Chose</legend>
          <label>Choose your favorite movie genres:</label>
          <div>
            horror
            <input
              name="checkbox"
              type="checkbox"
              value={color}
              onChange={(e) => setColor(e.target.value)}
            />
          </div>
          <div>
            comedy
            <input
              name="checkbox"
              type="checkbox"
              value={color}
              onChange={(e) => setColor(e.target.value)}
            />
          </div>
          <div>
            drama
            <input
              name="checkbox"
              type="checkbox"
              value={color}
              onChange={(e) => setColor(e.target.value)}
            />
          </div>

          <label>
            Choose your favorite fruit:
            <select value={fruit} onChange={(e) => setFruit(e.target.value)}>
              <option value="grapefruit">Грейпфрут</option>
              <option value="lime">Лайм</option>
              <option selected value="coconut">
                Кокос
              </option>
              <option value="mango">Манго</option>
              <option value="mango">Виноград</option>
            </select>
          </label>

          <label>
            Attach file:
            <input type="file" />
          </label>

          <label>
            Color:
            <input
              name="color"
              type="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
            />
          </label>

          <label>Choose your gender:</label>
          <div className="radio">
            <label style={{ display: "inline-block" }}>
              <input
                type="radio"
                name="male"
                value="Male"
                checked={gender === "Male"}
                onChange={(e) => onValueChange(e)}
              />
              Male
            </label>
          </div>
          <div className="radio">
            <label style={{ display: "inline-block" }}>
              <input
                type="radio"
                name="female"
                value="Female"
                checked={gender === "Female"}
                onChange={(e) => onValueChange(e)}
              />
              Female
            </label>
          </div>
          <div className="radio">
            <label style={{ display: "inline-block" }}>
              <input
                type="radio"
                name="other"
                value="Other"
                checked={gender === "Other"}
                onChange={(e) => onValueChange(e)}
              />
              Other
            </label>
          </div>
        </fieldset>

        <div className="form-section__btns-form">
          <MainButton type="submit" direction="Отправить" />
          <MainButton type="button" direction="Сбросить" onClick={formReset} />
        </div>
      </form>

      <div className="form-section__btns">
        <Link to="/float">
          <MainButton direction="Предыдущая таска" />
        </Link>
      </div>
    </div>
  );
}

export default FormSection;
