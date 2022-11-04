import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error";
import Portfolio from "./pages/Portfolio";
import RepoInfo from "./pages/RepoInfo";
import MoreInfo from "./pages/MoreInfo";
import "./styles.css";
import Navbar from "./components/Navbar";
import ErrorBoundary from "./components/ErrorBoundary";

export default function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<Error />} />

          <Route path="portfolio" element={<Portfolio />} >
          
          <Route path=':portfolioId' element= {<MoreInfo/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}
