import React from "react";
import "./Balance_General.css";

function Balance_General() {
    return (
        <div className="Balance_General">
            <div className="Franja_Superior">
                <h1 className="Titulo">Balance General</h1> 
            </div>

            <div className="Ubicacion">
                {/* <button className="Activos">Activos</button>
                <button className="Total_Activos" type="button">Total Activos</button>
                <button className="Pasivos">Pasivos</button>
                <button className="Total_Pasivos" type="button">Total Pasivos</button>
                <button className="Patrimonio" type="button">Patrimonio</button> */}
            </div>

            <div className="Franja_Left">
                <div className="contenedor-botones">
                    <button className="Activos" type="button">Activos</button>
                    <button className="Pasivos" type="button">Pasivos</button>
                    <button className="Total_Activos" type="button">Total Activos</button>
                    <button className="Total_Pasivos" type="button">Total Pasivos</button>
                    <button className="Patrimonio" type="button">Patrimonio</button>
                </div>
            </div>
        </div>
    )
}

export default Balance_General;
