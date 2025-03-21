import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Banner from "components/Banner";
import Titulo from "components/Titulo";
import NaoEncontrada from "pages/NaoEncontrada";

import styles from "./Player.module.css";

function Player() {
  const [video, setVideo] = useState([]);
  const parametros = useParams();

  useEffect(() => {
    fetch(
      `https://my-json-server.typicode.com/ldickmann/cinetag-server/videos?id=${parametros.id}`
    )
      .then((resposta) => resposta.json())
      .then((dados) => {
        setVideo(...dados);
      });
  }, [parametros.id]);

  if (!video) {
    return <NaoEncontrada />;
  }

  return (
    <>
      <Banner imagem="Player" />
      <Titulo>
        <h1>Player</h1>
      </Titulo>
      <section className={styles.container}>
        <iframe
          width="100%"
          height="100%"
          src={video.link}
          title={video.titulo}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </section>
    </>
  );
}

export default Player;
