import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import fotoAlbum from "../../assets/images/portada.jpg";
import "./Records.css";
import { BotonInicio } from "../../components";

export const Records = () => {
  return (
    <>
      <div>
        <h1>Records</h1>
        <p>
          Latinoamérica, una región donde las comunidades expresan la vida por
          medio de sus raíces, valores y música, esto fue lo que registró Beno
          Lieberman durante los años sesentas, setentas y ochentas, al viajar en
          búsqueda de los mejores músicos de esa época y grabar las joyas
          musicales de México, Centroamérica y El Caribe, que actualmente
          preserva la Fonoteca Nacional, como parte del registro de Memoria del
          Mundo de México, de la UNESCO.
        </p>
        <p>
          El interés principal de esta disquera es promover y difundir la música
          de este legado histórico, la mayor parte muy poco conocida, con
          proyectos discográficos de la música tradicional de México, pero
          también de la gran riqueza musical de Panamá, República Dominicana,
          Haití y Belice, entre otros, del mismo acervo, así como también tender
          un puente entre la tradición de los años 60 a 80, y músicos actuales,
          que dan continuidad a los mismos valores, con su gran talento y
          excelente calidad interpretativa.
        </p>
        <div className="portada">
          <Link to="/records/disco">
            <img src={fotoAlbum} />
          </Link>
        </div>
      </div>
      <BotonInicio />
    </>
  );
};
