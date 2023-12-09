import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Screens/Home";
import ProductScreen from "./Screens/ProductScreen";
import CategoryScreen from "./Screens/CategoryScreen";
import { Outlet } from "react-router-dom";


function App() {
  return (
    // <Router>
    <>
      <Header />
      <main className="py-3">
        <Container>
          {/* <Routes>
            <Route path='/' element={<Home />} exact />
            <Route path='/:category/:id' element={<ProductScreen />} />
            <Route path='/:category' element={<CategoryScreen />} />
          </Routes> */}
          <Outlet />
        </Container>
      </main>
      <Footer />
      {/* </Router> */}
    </>
  );
}

export default App;
