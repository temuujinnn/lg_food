import HomePage from "../homePage";
import css from "./style.module.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ProductPage from "../productPage";
function App() {
  return (
    <div className={css.App}>
      <Router>
        <Route path="/product" component={ProductPage} />
        <Route path="/" component={HomePage} exact />
      </Router>
    </div>
  );
}

export default App;
