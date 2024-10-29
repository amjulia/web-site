import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer";
import MainPage from "./pages/MainPage";
import ContactPage from "./pages/ContactPage";
import { GlobalStyle } from "./Global.styled";


const App = () => (
  <Router>
    <GlobalStyle />
    <Header />
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
    <Footer />
  </Router>
);

export default App;

