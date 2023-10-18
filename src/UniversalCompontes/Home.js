import React from "react";
//Importar Header
import Header from "./Header";

//Importar Home.css
import "./Home.css";

//Importar Footer 
import Footer from "./Footer";

<<<<<<< HEAD
=======

>>>>>>> 0e51c18ab381f014e747f954677c69d7794f4e5c

function Home() {
    return (
        <div>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-12">
                        <Header />
                    </div>
                </div>

                <div class="row">
                    <div class="col-lg-12">
<<<<<<< HEAD
                        <div class="diseñoHome">
                            <div id="textos">
                                <h1>Bienvenido a nuestra página de inicio</h1>
                                <h2>La cooperativa de todos</h2>
                                <h3>Lo entregamos todo por el amor y la familia</h3>
                                <p>Esta es una página de inicio de ejemplo.</p>
                                <button>¡Comenzar!</button>
                            </div>
=======
                        <div className="diseñoHome">
                            
                            <h1>Bienvenido a nuestra página de inicio</h1>
                            <p>Esta es una página de inicio de ejemplo.</p>
                            <button>¡Comenzar!</button>
>>>>>>> 0e51c18ab381f014e747f954677c69d7794f4e5c

                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-lg-12">
                        <Footer />
                    </div>
                </div>

            </div>
            
            
        </div>

    );


}

export default Home;