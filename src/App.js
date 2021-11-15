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
      <Header />
      <main>
        <Container>
          <Router>
            <Switch>
              <Route path="/" exact>
                <Users />
              </Route>
              <Route path="/places" exact>
                <Places />
              </Route>
              <Redirect to="/" />
            </Switch>
          </Router>
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;
