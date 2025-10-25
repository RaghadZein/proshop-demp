import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <main className="py-3">
        {" "}
        {/* Main content area with vertical padding */}
        <Container>
          <Outlet /> {/* Renders the matched child route component here */}
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;
