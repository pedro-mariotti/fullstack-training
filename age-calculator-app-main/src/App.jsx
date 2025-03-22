import { useState } from "react";
import { TextInput } from "./components/textInput.jsx";
import buttonArrow from "./assets/images/icon-arrow.svg";
import "./App.css";

function App() {
  const [day, setDay] = useState(0);
  const [month, setMonth] = useState(0);
  const [year, setYear] = useState(0);
  const today = new Date();
  const currDay = today.getDate();
  const currMonth = today.getMonth() + 1;
  const currYear = today.getFullYear();
  const [AgeDay, setAgeDay] = useState("--");
  const [AgeMonth, setAgeMonth] = useState("--");
  const [AgeYear, setAgeYear] = useState("--");

  const calculateDate = (e) => {
    e.preventDefault();
    console.log(
      "Dados do formulário:",
      { year, month, day },
      " currYear - year = ",
      currYear,
      " - ",
      year
    );
    console.log("Data atual:", { currDay, currMonth, currYear });

    var tempAgeYear = currYear - parseInt(year);
    var tempAgeDay = currDay - parseInt(day);
    var tempAgeMonth = currMonth - parseInt(month);

    if (tempAgeYear > 0) {
      if (tempAgeDay < 0) {
        tempAgeMonth--;
        tempAgeDay += 31;
      }
      if (tempAgeMonth < 0) {
        tempAgeYear--;
        tempAgeMonth += 12;
      }
    } else {
      tempAgeDay = "--";
      tempAgeMonth = "--";
      tempAgeYear = "--";
    }
    setAgeDay(tempAgeDay);
    setAgeMonth(tempAgeMonth);
    setAgeYear(tempAgeYear);
  };

  return (
    <>
      <main>
        <section>
          <form onSubmit={calculateDate}>
            <div className="text-inputs-container">
              <label>
                D A Y{" "}
                <input
                  type="text"
                  required
                  id="day-input"
                  onChange={(e) => setDay(e.target.value)}
                />
              </label>
              <label>
                M O N T H{" "}
                <input
                  type="text"
                  required
                  id="month-input"
                  onChange={(e) => setMonth(e.target.value)}
                />
              </label>
              <label>
                Y E A R{" "}
                <input
                  type="text"
                  required
                  id="year-input"
                  onChange={(e) => setYear(e.target.value)}
                />
              </label>
            </div>
            <div className="button-line-div">
              <div className="line"></div>
              <button type="submit" value="">
                <img src={buttonArrow} alt="button arrow down" />
              </button>
            </div>
          </form>
          <div className="calculator-output">
            <p>
              <span className="highlighted-number">{AgeYear}</span> years
            </p>
            <p>
              <span className="highlighted-number">{AgeMonth}</span> months
            </p>
            <p>
              <span className="highlighted-number">{AgeDay}</span> days
            </p>
          </div>
        </section>
        <footer className="attribution">
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by <a href="#">Pedro Mariotti</a>.
        </footer>
      </main>
    </>
  );
}

export default App;
