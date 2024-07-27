import { createEffect, createSignal, type Component } from "solid-js";

import logo from "./logo.svg";
import styles from "./App.module.css";

const App: Component = () => {
  const appDiv = document.getElementById("app-div");
  const [scroll, setScroll] = createSignal(0);

  appDiv?.addEventListener("scroll", () => {
    console.log("scrolling");
    setScroll(appDiv.scrollTop);
  });

  createEffect(() => {
    console.log(scroll());
  });

  return (
    <div id="app-div" class={styles.App}>
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />
        <p class="mt-8">
          Hey! I am <b>Simon</b> and I am a <b>Software Engineer</b>!
        </p>
        <p class={styles.baseText}>
          Currently living in <b>South Korea</b>. I thrive in solving problems
          and finding solutions.
        </p>
        <p class={styles.baseText}>
          I am passionate about anything related to code, NeoVim and helping
          others.
        </p>
        <a
          class={styles.link}
          href="https://github.com/solidjs/solid"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Solid
        </a>
      </header>
      <div class={styles.description}>
        <p>Hello world!</p>
        <p>Hello world!</p>
        <p>Hello world!</p>
        <p>Hello world!</p>
        <p>Hello world!</p>
        <p>Hello world!</p>
      </div>
    </div>
  );
};

export default App;
