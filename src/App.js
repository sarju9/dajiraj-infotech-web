import Company from "./Components/Company";
import Header from "./Components/Header";
import Products from "./Components/Products";
import CompanyDetails from "./Components/CompanyDetails";
import Services from "./Components/Services";
import Career from "./Components/Career";
import Portfolio from "./Components/Portfolio";
import Industries from "./Components/Industries";
import Footer from "./Components/Footer";

// Global Style
import "./Styles/Global_Style.css";

function App() {
  return (
    <>
      <Header />
      <Company />
      <Products />
      <CompanyDetails />
      <Services />
      <Career />
      <Portfolio />
      <Industries />
      <Footer />
    </>
  );
}

export default App;
