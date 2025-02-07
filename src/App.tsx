import { BrowserRouter } from "react-router";

import Router from "./routes";
import "./styles/index.scss";

const App = () => {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
};

export default App;
