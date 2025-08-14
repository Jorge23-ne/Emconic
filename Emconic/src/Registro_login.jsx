import React from "react";
import './ingresar_css.css';

function Registrarse() {

    return (

        <>

            <div className="Login">
                <div class="Tilo"></div>




                <h2>
                    Ingresar
                </h2>
                <form className="Nombre1" action="">

                    <input type="text" placeholder="Nombre de usuario"></input>

                </form>

                <div className="Correo1">


                    <input type="text" name="" id="" placeholder="Correo electrónico"></input>

                </div>
                <div className="Telefono1">


                    <input type="text" name="" id="" placeholder="Número de teléfono"></input>

                </div>

                <div className="Contraseña1">


                    <input type="password" name="" id="" placeholder="Contraseña"></input>

                </div>

                <button className="Boton" type="submit">Enviar</button>

            </div>
        </>
    )
}

export default Registrarse;
