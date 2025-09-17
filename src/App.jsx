import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Components/HomePage";
import Countries from "./Components/Countries";
import About from "./Components/About";
import Nav from "./Components/Share/Nav";
import CountryDetails from "./Components/CountriesDetails";

function App() {
  return (
    <BrowserRouter>
    <Nav/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/countries" element={<Countries/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/countries/:countryName" element={<CountryDetails/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
