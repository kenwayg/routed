import AboutUs from "./pages/AboutUs";
import GlobalStyle from "./components/GlobalStyle";
import { Route, Switch } from "react-router-dom";
import OurWork from "./pages/OurWork";
import ContactUs from "./pages/ContactUs";
import Nav from "./components/Nav";
import { useState } from "react";
import Movie from "./nobueno";
import MovieDetail from "./pages/MovieDetail";
function App() {
  const [mov, setMov] = useState(Movie());
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route path="/" exact>
          <AboutUs />
        </Route>

        <Route path="/ourwork" exact>
          <OurWork film={mov} />
        </Route>
        <Route path="/ourwork/:id">
          <MovieDetail film={mov} setFilm={setMov} />
        </Route>
        <Route path="/contact">
          <ContactUs />
        </Route>
      </Switch>
    </div>
  );
}
export default App;
