import { createSignal, type Component } from "solid-js";

import logo from "./logo.svg";
import styles from "./App.module.scss";

const App: Component = () => {
  // const [scroll, setScroll] = createSignal(0);
  // const maxScroll = 100;
  // let throttleTimeout: number | null;

  // function handleScroll() {
  //   if (throttleTimeout) return;

  //   throttleTimeout = setTimeout(() => {
  //     setScroll(window.scrollY);
  //     throttleTimeout = null;
  //   }, 25); // 25ms delay
  // }

  // window.addEventListener("scroll", handleScroll);
  // onCleanup(() => {
  //   window.removeEventListener("scroll", handleScroll);
  // });

  return (
    <div id="app-div" class={styles.App}>
      <header class={styles.header}>
        <p>Hey! I am</p>
        <h1>Simon Bernabeu</h1>
        <p>a software engineer currently living in South Korea</p>

        <p class={styles.scrollText}>Scroll down to see more</p>
      </header>
    </div>
  );
};

export default App;
