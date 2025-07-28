import React from "react";
import './ingresar_css.css';

function Registrarse(){

    return(

        <>
          <div className="Login">
        <h2>
            Ingresar
        </h2>
        <form className="Nombre" action="">
          
            <input type="text" placeholder="Nombre de usuario"></input>

        </form>
         
        <div className="Correo">

           
            <input type="text" name="" id="" placeholder="Correo electrónico"></input>
            
        </div>
        <div className="Telefono">

           
            <input type="text" name="" id="" placeholder="Número de teléfono"></input>
            
        </div>
        
        <div className="Contraseña">

            
            <input type="password" name="" id="" placeholder="Contraseña"></input>
            
        </div>
        <button className="Boton" type="submit">Enviar</button>

    </div>
        </>
    )
}

export default Registrarse;