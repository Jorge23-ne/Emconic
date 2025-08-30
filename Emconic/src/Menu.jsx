import React, { useState } from "react";
import "./Menu.css";

function Menu() {
  const [info, setInfo] = useState(null);

  return (
    <>
     
      <div className="Arriba">
        <div className="Menu"></div>
        <div className="Img"></div>

        <div className="Menu3">
          <button
            className="D1"
            type="button"
            onMouseEnter={() => setInfo("Aquí puedes ingresar nuevos datos")}
            onMouseLeave={() => setInfo(null)}
          >
            Ingresar Datos
          </button>

          <button
            className="D2"
            type="button"
            onMouseEnter={() => setInfo("Consulta o modifica el inventario")}
            onMouseLeave={() => setInfo(null)}
          >
            Inventario
          </button>

          <button
            className="D3"
            type="button"
            onMouseEnter={() => setInfo("Visualiza estadísticas")}
            onMouseLeave={() => setInfo(null)}
          >
            Estadísticas
          </button>

          <button
            className="D4"
            type="button"
            onMouseEnter={() => setInfo("Estado de resultados financieros")}
            onMouseLeave={() => setInfo(null)}
          >
            Estado resultado
          </button>

          <button
            className="D5"
            type="button"
            onMouseEnter={() => setInfo("Genera reportes personalizados")}
            onMouseLeave={() => setInfo(null)}
          >
            Reportes
          </button>

          <button
            className="D6"
            type="button"
            onMouseEnter={() => setInfo("Guía para comprender los procesos contables")}
            onMouseLeave={() => setInfo(null)}
          >
            Guía instruccional
          </button>
        </div>

       
        <div className="InfoBox">
          {info && <p>{info}</p>}
        </div>

        <div className="Menu1"></div>
        <div className="Menu2"></div>
      </div>
    </>
  );
}

export default Menu;
