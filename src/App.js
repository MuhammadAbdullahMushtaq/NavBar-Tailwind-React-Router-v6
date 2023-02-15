import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Property from "./pages/Property";
import Crypto from "./pages/Crypto";
import Netflix from "./pages/Netflix";
import Twitch from "./pages/Twitch";
import NotFound from "./pages/NotFound";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="property" element={ <Property/> } />
        <Route path="crypto" element={ <Crypto/> } />
        <Route path="netflix" element={ <Netflix/> } />
        <Route path="twitch" element={ <Twitch /> } />
        <Route path="*" element={ <NotFound/> } />
      </Routes>
    </div>
  )
}

export default App