import React from "react";

function ListaRegistros({ registros }) {
  return (
    <div className="registros-container">
      <h2>Registros</h2>
      <ul className="registros-list">
        {registros.map((registro, index) => (
          <li key={index} className="registro-item">
            Nombre: {registro.nombre}, Apellido: {registro.apellido}, Edad:{" "}
            {registro.edad}, Email: {registro.email}, Nota del Curso:{" "}
            {registro.nota}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaRegistros;
