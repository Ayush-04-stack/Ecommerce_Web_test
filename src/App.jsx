import "./App.css";
import Header from "./Header";
import Products from "./Products";
import About from "./About";
import SignIN from "./SignIN";
import SignUp from "./SignUp";
import Contact from "./Contact";

import { useState } from "react";
import { Routes, Route } from "react-router-dom";

function App() {

    const [SearchQuery, setSearchQuery] = useState("");

    return (
        <>
            <Header setSearchQuery={setSearchQuery} />

            <Routes>
                <Route
                    path="/"
                    element={<Products SearchQuery={SearchQuery} />}
                />

                <Route
                    path="/products"
                    element={<Products SearchQuery={SearchQuery} />}
                />

                <Route
                    path="/about"
                    element={<About />}
                />

                <Route
                    path="/contact"
                    element={<Contact />}
                />

                <Route
                    path="/auth/login"
                    element={<SignIN />}
                />

                <Route
                    path="/auth/register"
                    element={<SignUp />}
                />
            </Routes>
        </>
    );
}

export default App;