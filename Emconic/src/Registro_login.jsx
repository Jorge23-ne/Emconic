import React, { useState } from "react";
import { Link } from "react-router-dom";
import './ingresar_css.css';

function Registrarse() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isValid, setIsValid] = useState(false);


    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };



    const validatePassword = (password) => {
        const minLength = password.length >= 8;
        const hasUpperCase = /[A-Z]/.test(password);
        const hasNumber = /\d/.test(password);
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
        return minLength && hasUpperCase && hasNumber && hasSpecialChar;
    };

    const handleSubmit = (e) => {
        e.preventDefault();


        if (username === "" || email === "" || phone === "" || password === "") {
            setError("Por favor llena todos los campos.");
            setIsValid(false);
        } else if (!validateEmail(email)) {
            setError("El correo electrónico no es válido.");
            setIsValid(false);

        } else if (!validatePassword(password)) {
            setError("La contraseña debe tener al menos 8 caracteres, una mayúscula, un número y un carácter especial.");
            setIsValid(false);
        } else {
            setError("");
            setIsValid(true);
            console.log("Usuario registrado correctamente");
        }
    };

    return (
        <>
            <div className="Login">
                <div className="Tilo"></div>

                <h2>Ingresar</h2>

                <form className="Nombre1" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Nombre de usuario"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </form>

                <div className="Correo1">
                    <input
                        type="text"
                        placeholder="Correo electrónico"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="Contraseña1">
                    <input
                        type="password"
                        placeholder="Contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>


                <button className="Boton" type="submit">Enviar</button>
                <Link to="/cambio_de_contraseña">¿Olvidaste tu contraseña?</Link>

                {error && <p className="error">{error}</p>}
                {isValid && <p className="success">¡Usuario registrado con éxito!</p>}
            </div>
        </>
    );
}

export default Registrarse;
