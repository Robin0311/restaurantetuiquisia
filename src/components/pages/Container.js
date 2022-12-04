import { Outlet, Link } from "react-router-dom";
import Header from "../shared/Header";
import Body from "../shared/Body";
import Footer from "../shared/Footer";

const Container = () => {
  return (
    <>
      <div className="container-page container">
        <Header />
        {/* Insertar cada pagina dependiendo de la navegacion */} 
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default Container;
