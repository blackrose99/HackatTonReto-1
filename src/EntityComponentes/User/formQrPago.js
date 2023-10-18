import React from "react";
import ImagenDeBanco from '../img-entityComponentes/imagen01hyjpg.jpg';

function FormQrPago() {
    return (
        <div>
            <img className="imgBanck" src={ImagenDeBanco} width={500} alt="Imagen del banco" />
        </div>
    )
}

export default FormQrPago;
