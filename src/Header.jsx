import reactLogo from "./assets/react.svg";
import { Link } from "react-router-dom";


function Header({ setSearchQuery }) {

    function toggleMode() {
        document.body.classList.toggle("dark");
    }

    return (
        <header
            style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                padding: "10px",
                borderBottom: "2px solid red",
            }}
        >
            <img
                src={reactLogo}
                alt="React Logo"
                style={{
                    height: "50px",
                    width: "50px",
                }}
            />

            <h1>Products</h1>

            <input
                type="text"
                placeholder="Enter product name"
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                    width:"33%"
                }}
            />

            <nav
                style={{
                    display: "flex",
                    gap: "20px",
                }}
            >
                <Link style={{ textDecoration: "none", color: "red" }} to="/">
                    Home
                </Link>

                <Link style={{ textDecoration: "none", color: "red" }} to="/products">
                    Products
                </Link>

                <Link style={{ textDecoration: "none", color: "red" }} to="/about">
                    About Us
                </Link>

                <Link style={{ textDecoration: "none", color: "red" }} to="/contact">
                    Contact Us
                </Link>

                <Link style={{ textDecoration: "none", color: "red" }} to="/auth/login">
                    Login
                </Link>
            </nav>

            <button onClick={toggleMode}>
                Dark/Light
            </button>
        </header>
    );
}

export default Header;