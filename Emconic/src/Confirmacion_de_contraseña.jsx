import React, { useState } from "react";
import "./Confirmacion_de_contraseña.css";

function Confirmacion() {
    const [code, setCode] = useState(["", "", "", "", "", ""]);


    const handleChange = (e, index) => {
        const value = e.target.value;
        if (/[^0-9]/.test(value)) return;
        const newCode = [...code];
        newCode[index] = value;
        setCode(newCode);


        if (value && index < 5) {
            document.getElementById(`code-${index + 1}`).focus();
        }
    };


    const handleKeyDown = (e, index) => {
        if (e.key === "Backspace" && !code[index]) {

            if (index > 0) {
                document.getElementById(`code-${index - 1}`).focus();
            }
        }
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        const fullCode = code.join("");
        console.log("Código ingresado:", fullCode);

    };

    return (
        <div className="Confirmacion">
            <div className="Codigo">


            
                <h2 className="Dominick">Confirmación de Registro</h2>
                <p className="Ingresecodigo">Ingrese el código enviado al correo</p>
                <form className="code-container" onSubmit={handleSubmit}>
                    {code.map((digit, index) => (
                        <input
                            key={index}
                            type="text"
                            maxLength="1"
                            className="cod"
                            id={`code-${index}`}
                            value={digit}
                            onChange={(e) => handleChange(e, index)}
                            onKeyDown={(e) => handleKeyDown(e, index)}
                            autoFocus={index === 0}
                        />
                    ))}




                </form>
                    <button className="Enviar" type="submit">
                    Enviar
                </button>

            </div>
        </div>
    );
}

export default Confirmacion;
