import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap-icons/font/bootstrap-icons.css";

import "./App.css";
import Context from "./Context";
import Display from "./Display";

function App() {
  return (
    <Context>
      <Display />
    </Context>
  );
}

export default App;
