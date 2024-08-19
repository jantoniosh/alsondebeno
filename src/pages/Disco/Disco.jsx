import { BotonInicio } from "../../components";
import fotoAlbum from "../../assets/images/portada.jpg";
import "./Disco.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStore } from "@fortawesome/free-solid-svg-icons";
import {
  faAmazon,
  faApple,
  faAppStore,
  faSpotify,
} from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons/faYoutube";

export const Disco = () => {
  return (
    <>
      <div className="discoMain">
        <div className="discoLeft">
          <div className="portada">
            <img src={fotoAlbum} />
          </div>
        </div>
        <div className="discoRight">
          <h2>Sontrack Original de la Película Al Son de Beno</h2>
          <div>
            <a
              href={`https://reyvinilo.com/tienda/al-son-de-beno/`}
              target="_blank"
              className="linkTienda"
            >
              <FontAwesomeIcon icon={faStore}></FontAwesomeIcon>
            </a>
            <a
              href={`https://open.spotify.com/album/3Yl5zkuovigBsBL9xdYtYl?si=PB0eMivVQQapavREa5xZUg`}
              target="_blank"
              className="linkTienda"
            >
              <FontAwesomeIcon icon={faSpotify}></FontAwesomeIcon>
            </a>
            <a
              href={`https://music.apple.com/mx/album/sontrack-original-de-la-peli-cula-al-son-de-beno/1757706516`}
              target="_blank"
              className="linkTienda"
            >
              <FontAwesomeIcon icon={faApple}></FontAwesomeIcon>
            </a>
            <a
              href={`https://music.youtube.com/playlist?list=OLAK5uy_kpArct_gbDrkxicRQ1VZa1tzKb-sAo57I&si=3LE30fZommYJm1Xn`}
              target="_blank"
              className="linkTienda"
            >
              <FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon>
            </a>
            <a
              href={`https://music.amazon.com.mx/albums/B0D9L18PW3?marketplaceId=ART4WZ8MWBX2Y&musicTerritory=MX&ref=dm_sh_m32S7y8iq9zvCaeyse1rOWiYu`}
              target="_blank"
              className="linkTienda"
            >
              <FontAwesomeIcon icon={faAmazon}></FontAwesomeIcon>
            </a>
          </div>
          <h3>Descripción</h3>
          <p className="texto">
            SONTRACK original de la película Al son de Beno
          </p>
          <p className="texto">
            Este álbum es el resultado de un rescate de los acervos musicales
            del eminente musicólogo mexicano Beno Lieberman, principal
            responsable de la legendaria Antología del Son de México en 1981.
            Música tradicional inédita, descubierta por su hijo Ilán, de autores
            desconocidos hasta ahora. El disco incluye 24 piezas musicales del
            acervo de Beno, 17 de ellas publicadas por primera vez, desde sus
            primeras grabaciones en Jarácuaro, Michoacán en (circa) 1963,
            pasando por sones huastecos, jarochos, de arpa grande, del Istmo de
            Tehuantepec, tres sones blueseros de la Costa Chica del increíble
            dúo Damián-Calleja, y una canción escrita e interpretada por Beno
            mismo, grabada poco antes de su muerte en 1985.
          </p>
          <p className="texto">
            El booklet a color contiene las letras de todas las canciones y
            fotografías desconocidas de su acervo personal, así como un ensayo
            de Josh Kun.
          </p>
          <h3>Track List</h3>
          <p className="texto">
            Lado A
            <ol>
              <li>La Josefinita</li>
              <li>La sandunga</li>
              <li>La pasión</li>
              <li>La indita</li>
              <li>La petenera</li>
              <li>La malagueña</li>
              <li>El bejuquito</li>
              <li>Los chiles verdes (toma I)</li>
            </ol>
          </p>
          <p className="texto">
            Lado B
            <ol>
                <li>Los chiles verdes (toma II)</li>
                <li>La Mariquita</li>
                <li>La Rosita</li>
                <li>Mi bien yo necesito</li>
                <li>Pajarillo Jilguero</li>
            </ol>
          </p>
          <p className="texto">
            Lado C
            <ol>
                <li>La malagueña curreña</li>
                <li>La malagueña curreña</li>
                <li>La Llorona</li>
                <li>La Martiniana</li>
                <li>La morenita encantadora</li>
            </ol>
          </p>
          <p className="texto">
            Lado D
            <ol>
                <li>El sube y baja</li>
                <li>El gallo de oro</li>
                <li>El caimán</li>
                <li>La pasión</li>
                <li>Hangsman</li>
            </ol>
          </p>
        </div>
      </div>
      <BotonInicio />
    </>
  );
};
