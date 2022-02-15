import * as ReactDom from "react-dom";
import { Home } from "./app/views/home";

function render() {
  ReactDom.render(<Home />, document.getElementById("root"));
}

render();
