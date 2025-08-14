import React from "react";
import { Link } from "react-router-dom";
import "./Bienvenida.css";
import Login from "./Login";



function Bienvenida() {
    return (

        <>




             

            <div className="bienvenida">
                
            <div  class="elipse"></div>
            
              <div class="elipse1"></div>
                
                <div class="elipse2"></div>
                
                <div class="elipse3"></div>


                <div class="contenedor"></div>


                <h1 className="titulo">
                    Bienvenidos a Emconic
                </h1>

              

                <h10 className="texto">
                    Bienvenidos a la pagina EMCONIC, donde podras llevar las finanzas y cuentas de tu negocio de la manera mas facil y sencilla posible. Podras llevar conceptos de contabilidad complejos de una manera sencilla y entendible, sin necesidad de haber estudiado una carrera.

                </h10>

                <Link to='/Login ' className="boton">Next</Link>


            </div>

        </>
    );
};
export default Bienvenida;
