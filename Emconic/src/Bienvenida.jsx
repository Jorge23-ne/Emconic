import React from "react";
import { Link } from "react-router-dom";
import "./Bienvenida.css";
import Login from "./Login";



function Bienvenida() {
    return (

        <>





            <main className="bienvenida1">


                <h1 className="titulo">
                    Bienvenidos a Emconic
                </h1>


                <div class="Estilo-contenedor">
                    <p className="texto">
                        Bienvenidos a la pagina EMCONIC, donde podras llevar las finanzas y cuentas de tu negocio de la manera mas facil y sencilla posible. Podras llevar conceptos de contabilidad complejos de una manera sencilla y entendible, sin necesidad de haber estudiado una carrera.

                    </p>
                </div>


                <Link to='/Login ' className="boton">Next</Link>
            </main>


            <div class="elipse"></div>

            <div class="elipse1"></div>

            <div class="elipse2"></div>

            <div class="elipse3"></div>


            <div class="contenedor"></div>



            {/* <Link to='/Confirmacion' className="boton">Confirmacion</Link>
               <Link to='/menu' className="boton">Menu</Link>
                <Link to='/videos' className="boton">videos</Link>
                <Link to='/balance_general' className="boton">Balance General</Link> */}




        </>
    );
};
export default Bienvenida;
