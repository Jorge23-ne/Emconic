import { Routes, Route } from "react-router-dom"; 
import Bienvenida from "../Bienvenida";
import Login from "../Login";
import Registrarse from "../Registro_login";
import Menu from "../Menu";




function Routers () {

    return(

        <Routes>
            <Route path='/' element={<Bienvenida/>}/>
            <Route path="/login" element={<Login/>}/>
             <Route path="/registrarse" element={<Registrarse/>}/>
                <Route path="/menu" element={<Menu/>}/>
        </Routes>


    )
}

export default Routers;
