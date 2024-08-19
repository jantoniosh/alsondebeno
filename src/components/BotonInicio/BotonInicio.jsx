import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./BotonInicio.css";

export const BotonInicio = () => {
  return (
    <>
      <Link className="iconoInicio" to="/">
        <FontAwesomeIcon icon={faHome} />
      </Link>
    </>
  );
};
