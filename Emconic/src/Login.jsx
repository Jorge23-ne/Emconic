import React, { useState } from "react";
import "./Estilo_Login.css";
import { Link } from "react-router-dom";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isValid, setIsValid] = useState(false);


    const validatePassword = (password) => {
        return password.length >= 8;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (username === "" || password === "") {
            setError("Por favor ingresa tanto el nombre de usuario como la contraseña.");
            setIsValid(false);
        } else if (!validatePassword(password)) {
            setError("La contraseña debe tener al menos 8 caracteres.");
            setIsValid(false);
        } else {
            setError("");
            setIsValid(true);
            console.log("Iniciado sesión correctamente");

        }
    };

    return (
        <>
            <div className="logo"></div>
            <div className="contenido"></div>
            <div className="Login2">
                <h2 className="Inicio">Iniciar sesión</h2>

                {error && <p className="error">{error}</p>}
                {isValid && <p className="success">¡Inicio de sesión exitoso!</p>}
                
                <form className="Nombre" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Nombre de usuario"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </form>

                <div className="Contraseña">
                    <input
                        type="password"
                        placeholder="Contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <div>
                    <button className="Boton" type="submit">
                        Enviar
                    </button>
                    <Link to="/Registrarse" className="Boton">
                        Crear perfil
                    </Link>
                </div>



            </div>
        </>
    );
}

export default Login;
