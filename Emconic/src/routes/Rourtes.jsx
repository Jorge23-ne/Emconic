import { Routes, Route } from "react-router-dom"; 
import Bienvenida from "../Bienvenida";
import Login from "../Login";
import Registrarse from "../Registro_login";




function Routers () {

    return(

        <Routes>
            <Route path='/' element={<Bienvenida/>}/>
            <Route path="/login" element={<Login/>}/>
             <Route path="/registrarse" element={<Registrarse/>}/>
        </Routes>


    )
}

export default Routers;