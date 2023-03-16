import NavBar from "./Components/NavBar/NavBar";
import Hero from "./Components/Hero/Hero";
import Cards from "./Components/Cards/Cards";
import Divider from "./Components/Divider/Divider";
import ServicesLinks from "./Components/ServicesLinks/ServicesLinks";

// styles //
import "./styles/index.css";
import "./styles/global-styles.css";
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
      <ServicesLinks />
    </div>
  );
}

export default App;
