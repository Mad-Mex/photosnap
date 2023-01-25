import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer } from "./components/navigation/Footer/Footer";
import { Navbar } from "./components/navigation/Navbar/Navbar";
import { FeaturesPage } from "./pages/FeaturesPage";
import { HomePage } from "./pages/HomePage";
import { PricingPage } from "./pages/PricingPage";
import { StoriesPage } from "./pages/StoriesPage";


function App() {
  return (
    
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={ <HomePage /> }  />
        <Route path="/stories" element= { <StoriesPage /> }  />
        <Route path="/features" element={ <FeaturesPage /> }  />
        <Route path="/pricing" element={ <PricingPage /> } />
      </Routes>
      <Footer />
    </BrowserRouter>
    
  );
}

export default App;
