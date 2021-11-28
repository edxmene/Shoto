import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { Container } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Users from "./components/Users";
import Places from "./components/Places";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Container>
          <Switch>
            <Route path="/" exact>
              <Users />
            </Route>
            <Route path="/places">
              <Places />
            </Route>
            {/* <Redirect to="/" /> */}
          </Switch>
        </Container>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
