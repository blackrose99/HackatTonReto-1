import React from "react";
//Importar Header
import Header from "./Header";

//Importar Home.css
import "./Home.css";

//Importar Footer 
import Footer from "./Footer";

import ImagenDeLogoCoomultrasan from '../UniversalCompontes/ImgUniversal/logoCoomultrasan.png';


function Home() {
    return (
<<<<<<< HEAD
        <div class="container-fluid">
            <div class="row">
                <Header />
            </div>
=======
        <div>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-12">
                        <Header />
                    </div>
                </div>

                <div class="row">
                    <div class="col-lg-12">
                        <div className="diseñoHome">
                            <img src={ImagenDeLogoCoomultrasan} alt="Logo Coomultrasan" ></img>
                            <h1>Bienvenido a nuestra página de inicio</h1>
                            <p>Esta es una página de inicio de ejemplo.</p>
                            <button>¡Comenzar!</button>
>>>>>>> 05f73d8c683fb82a9d415fe7093b3b804ab1d8cb

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
