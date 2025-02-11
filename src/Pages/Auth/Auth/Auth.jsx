import { Outlet } from "react-router-dom";
import Navbar from "../../Shared/NavBar/NavBar";
import Footer from "../../Shared/Footer/Footer";

const Auth = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Auth;