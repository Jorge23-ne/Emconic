import React from "react";
import "./Estilo_Login.css";
import { Link } from "react-router-dom";

function Login() {

    return (

        <>

            <div class="logo"></div>
            <div class="contenido"></div>
            <div className="Login">
                <h2>
                    Iniciar sesión
                </h2>
                <form className="Nombre" action="">

                    <input type="text" placeholder="Nombre de usuario"></input>

               

                <div className="Contraseña">


                    <input type="password" name="" id="" placeholder="Contraseña"></input>

                </div>
                 </form>
                <button className="Boton" type="submit">Enviar</button>

                <Link to='/Registrarse ' className="Boton">Crear perfil </Link>


            </div>
        </>
    )
}
export default Login;