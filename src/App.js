import NavBar from "./Components/NavBar/NavBar";
import Hero from "./Components/Hero/Hero";
import Cards from "./Components/Cards/Cards";
import Divider from './Components/Divider/Divider'

// styles //
import "./styles/global-styles.css";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "mdbreact/dist/css/mdb.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Divider />
      <Hero />
      <Cards />
    </div>
  );
}

export default App;
