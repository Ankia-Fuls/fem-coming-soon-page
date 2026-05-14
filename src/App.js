import "./css/App.scss"
import { useEffect, useState } from "react";
import { useIsMobile } from "./function/pageSize.js"

function App() {

  const [error, setError] = useState(false);
  const [input, setInput] = useState("");

  const checkEmail = () => {
    var testEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const valid = input.trim() !== '' & testEmail.test(input);

    if (valid) {
      setError(false);
      alert("Email Submitted!");
      setInput("");
    }
    else {
      setError(true);
    }
  }

  return (
    <>
      <main className="main">
        <header className="main__logo">
          <img src="./images/logo.svg" alt="Base Apparel logo" className="main__logo--item" />
        </header>
        <div className="main__image" aria-hidden>
          <img src={useIsMobile() ? "./images/hero-mobile.jpg" : "./images/hero-desktop.jpg"} alt="" className="main__image--item" />
        </div>

        <section className="main__container" aria-labelledby="label">
          <h1 id="label" className="main__heading">
            <span className="main__heading--thin">We're</span> coming soon
          </h1>
          <p className="main__text">Hello fellow shoppers! We're currently building our new fashion store.
            Add your email below to stay up-to-date with announcements and our launch deals.</p>
          <div className={error ? "main__email main__email--error" : "main__email"}>
            <label htmlFor="email" className="sr-only">Enter your email:</label>
            <input
              type="email" id="email" name="email"
              placeholder="Email Address"
              className="main__email--input"
              value={input} onChange={(e) => setInput(e.target.value)}
              autocomplete="email"
              required
              aria-invalid={error ? true : false} aria-describedby="error-message"></input>
            {error && <img src="./images/icon-error.svg" alt="" className="main__error-icon"></img>}
            <button type="submit" className="main__email--button" onClick={checkEmail} aria-label="Submit">
              <img src="./images/icon-arrow.svg" />
            </button>
          </div>
          {error && <p className="main__error-message" id="error-message">Please provide a valid email</p>}
        </section>
      </main>

      <footer>
        <p className="attribution">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
          Coded by <a href="https://codeberg.org/Ankia_Fuls">Ankia Fuls</a>.
        </p>
      </footer>
    </>
  );
}

export default App;
