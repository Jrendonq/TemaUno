import React, { useState } from "react";
import RegistroForm from "./components/pages/auth/RegistroForm";
import ListaRegistros from "./components/pages/auth/ListaRegistros";
import "./App.css";

function App() {
  const [registros, setRegistros] = useState([]);

  // Función para agregar un nuevo registro
  const agregarRegistro = (registro) => {
    setRegistros([...registros, registro]);
  };

  return (
    <div className="container">
      <h1 className="text-center">Registro de Estudiantes</h1>
      <RegistroForm agregarRegistro={agregarRegistro} />
      <ListaRegistros registros={registros} />
    </div>
  );
}

export default App;
