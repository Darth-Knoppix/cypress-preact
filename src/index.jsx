import { h, render } from "preact";
import App from "./containers/App";

if (module.hot) {
  require("preact/debug");
}

render(<App />, document.body, document.body.lastElementChild);
