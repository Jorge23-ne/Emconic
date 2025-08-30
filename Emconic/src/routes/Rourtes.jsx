import { Routes, Route } from "react-router-dom"; 
import Bienvenida from "../Bienvenida";
import Login from "../Login";
import Registrarse from "../Registro_login";
import Menu from "../Menu";
import Cambio_de_contraseña from "../Cambio_de_contraseña";
import Confirmacion from "../Confirmacion_de_contraseña";




function Routers () {

    return(

        <Routes>
            <Route path='/' element={<Bienvenida/>}/>
            <Route path="/login" element={<Login/>}/>
             <Route path="/registrarse" element={<Registrarse/>}/>
                <Route path="/menu" element={<Menu/>}/>
                <Route path="/cambio_de_contraseña" element={<Cambio_de_contraseña/>}/>
                <Route path="/confirmacion" element={<Confirmacion/>}/>
        </Routes>


    )
}

export default Routers;
