import React from "react";
import "./Menu.css";

function Menu() {


  return (
    <>

      <div className="Balance_General">
        <div className="Franja_Superior">
          <h1 className="Titulo1">EMCONIC</h1>
        </div>

        <div className="Franja_Left">
          <div className="contenedor-botones">
            <button className="Activos" type="button">Ingresar Datos</button>
            <button className="Pasivos" type="button">Inventario</button>
            <button className="Total_Activos" type="button">Estado resultado</button>
            <button className="Total_Pasivos" type="button">Guia instruccional</button>
            <button className="Patrimonio" type="button">Reportes</button>
                 <button className="Patrimonio" type="button">Estadisticas</button>
          </div>
        </div>
      </div>

    </>


  );
}

export default Menu;
