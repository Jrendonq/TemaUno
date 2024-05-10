import React, { useState } from "react";

function RegistroForm({ agregarRegistro }) {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [edad, setEdad] = useState("");
  const [email, setEmail] = useState("");
  const [nota, setNota] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nombre || !apellido || !edad || !email || !nota) return;
    agregarRegistro({ nombre, apellido, edad, email, nota });
    setNombre("");
    setApellido("");
    setEdad("");
    setEmail("");
    setNota("");
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h2>Formulario de Registro</h2>
      <div className="form-group">
        <label>Nombre:</label>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label>Apellido:</label>
        <input
          type="text"
          value={apellido}
          onChange={(e) => setApellido(e.target.value)}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label>Edad:</label>
        <input
          type="number"
          value={edad}
          onChange={(e) => setEdad(e.target.value)}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label>Correo Electrónico:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label>Nota del Curso:</label>
        <input
          type="number"
          value={nota}
          onChange={(e) => setNota(e.target.value)}
          className="form-control"
        />
    </div>
      <div className="text-center"> {/* Div para centrar el botón */}
        <button type="submit" className="btn btn-primary">Registrar</button>
      </div>
    </form>
  );
}


export default RegistroForm;
