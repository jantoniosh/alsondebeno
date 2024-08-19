import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export const Info = () => {
  return (
    <>
      <h1>Información</h1>
      <p>
        Esta es una historia de padre e hijo. El hijo protege al padre
        contrabandeando la pistola del padre en su maleta para ocultarla de los
        agentes de aduanas. Más tarde, el padre utiliza la pistola para pegarse
        un tiro en la cabeza. Ahora que es mayor, el hijo quiere saber quién fue
        su padre y, dado que el padre pasó gran parte de su vida grabando a
        otras personas haciendo música, al hijo sólo le queda un recurso
        verdadero. El hijo debe escuchar lo que grabó su padre. Debe escuchar
        todo lo que su padre grabó. Porque cuando escucha todo lo que su padre
        grabó, toda la música hecha por otras personas, está escuchando a su
        padre escuchando. La forma en que escuchamos puede delatarnos. Puede
        abrir una puerta. El hijo, que ahora tiene la misma edad que su padre
        cuando éste se quitó la vida, hace una película sobre su padre
        escuchando, vuelve a hacer los viajes de su padre a todos los lugares a
        los que su padre fue a escuchar. Escucha donde escuchaba su padre.
        Conoce a los músicos que escuchaba su padre. Elige canciones que su
        padre grabó para la banda sonora de la película de su hijo. Ahora su
        padre escuchando es la partitura de él escuchando para su padre. Ahora
        el son –tipo de canción que su padre amaba por encima de todas las demás
        canciones– se ha convertido en la partitura del hijo encontrando a su
        padre y encontrándose a sí mismo, la partitura de esta historia de padre
        e hijo.
      </p>
      <p>
        Baruj "Beno" Lieberman nació en 1932 en Aguascalientes y creció en
        Ciudad de México. Sus padres, judíos polacos, habían emigrado a México
        una década antes, dejando atrás una Europa oscura que pronto se
        oscurecería más. Durante la Segunda Guerra Mundial, gran parte de su
        familia pereció en esa oscuridad, y en 1949 Beno fue enviado a Israel a
        vivir en un kibutz con su hermana y su primo. Cumplió el servicio
        militar obligatorio como topógrafo –pasaba los días pensando en la
        tierra y el territorio y en cómo llegamos a saber quiénes somos a través
        de nuestra relación con los valles y las regiones y los giros en el
        camino– y empezó a escribir y coleccionar canciones. Quizá pensó en lo
        difícil que es describir la tierra con sólo mirarla. Quizá para
        describir la tierra, para entenderla, para ir más allá de la superficie
        de un territorio, algún día tendría que escucharla.{" "}
      </p>
      <div>
        <Link to="/">
          <FontAwesomeIcon icon={faHome} />
        </Link>
      </div>
    </>
  );
};
