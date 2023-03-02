import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home"
import Portfolio from "./pages/Portfolio";
import WeatherApp from "./pages/WeatherApp";
import Dictionary from "./pages/Dictionary";
import Quiz from "./pages/Quiz";
import NoteBook from "./pages/NoteBook";
import ECommerce from "./pages/ECommerce";
import AllProjects from "./pages/AllProjects";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./Components/ScrollToTop";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="portfolio" element={ <Portfolio/> } />
        <Route path="weather" element={ <WeatherApp/> } />
        <Route path="dictionary" element={ <Dictionary/> } />
        <Route path="quiz" element={ <Quiz/> } />
        <Route path="notebook" element={ <NoteBook/> } />
        <Route path="ecommerce" element={ <ECommerce/> } />
        <Route path="allProjects" element={ <AllProjects/> } />
        <Route path="*" element={ <NotFound/> } />
      </Routes>
      <ScrollToTop />
    </div>
  )
}

export default App