import { useState } from "react";
import "./Cambio_de_contraseña.css";

function Cambio_de_contraseña() {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [isValid, setIsValid] = useState(false);

    const validatePassword = (password) => {

        const minLength = password.length >= 8;
        const hasUpperCase = /[A-Z, 0-9]/.test(password);
        const hasLowerCase = /[a-z, 0-9]/.test(password);
        const hasNumber = /\d/.test(password);
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);


        return minLength && hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (password == confirmPassword && validatePassword(password)) {
            setError("");
            setIsValid(true);
            console.log("Contraseña cambiada con éxito");

        } else {
            setIsValid(false);
            if (password !== confirmPassword) {
                setError("Las contraseñas no coinciden.");
            } else {
                setError("Tiene que tener mayor de 8 caracteres");
            }
            console.log("Error en la validación");
        }
    };
    return (
        <div className="cuerpo">
            <div className="Cambio">
                <h1 className="Cambio1">Cambio de contraseña</h1>

                {error && <p className="error">{error}</p>}
                {isValid && <p className="success">¡Contraseña cambiada con éxito!</p>}

                <form onSubmit={handleSubmit}>
                    <div className="G2">
                        <input
                            type="password"
                            id="newPassword"
                            placeholder="Ingrese la nueva contraseña"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <div className="G1">
                        <input
                            type="password"
                            id="confirmPassword"
                            placeholder="Confirme la nueva contraseña"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>

                    <button className="G3" type="submit">
                        Enviar
                    </button>
                </form>


            </div>
        </div>
    );
}

export default Cambio_de_contraseña;
