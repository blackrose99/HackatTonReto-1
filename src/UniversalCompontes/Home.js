import React from "react";
//Importar Header
import Header from "./Header";

//Importar Home.css
import "./Home.css";

//Importar Footer 
import Footer from "./Footer";




function Home() {
    return (
        <div>
            <Header />
            <div className="diseñoHome">

                <h1>Bienvenido a nuestra página de inicio</h1>
                <p>Esta es una página de inicio de ejemplo.</p>
                <button>¡Comenzar!</button>
            </div>
            <Footer />
        </div>

    );


}

export default Home;
