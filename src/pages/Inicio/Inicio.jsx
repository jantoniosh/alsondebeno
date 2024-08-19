import { Link } from "react-router-dom";
import "./Inicio.css";

export const Inicio = () => {
  return (
    <>
      <div className="fondoInicio">
        <h1 className="tituloInicio">Al Son de Beno</h1>
        <div>
          <Link className="linkInicio" to="/pelicula">Película</Link>
          <Link className="linkInicio" to="/radio">Radio</Link>
          <Link className="linkInicio" to="/records">Records</Link>
        </div>
      </div>
    </>
  );
};
