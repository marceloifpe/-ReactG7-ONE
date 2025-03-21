import { Route, Routes, useParams } from "react-router-dom";
import "./Post.css";
import posts from "../../json/posts.json";
import PostModelo from "../../componentes/PostModelo";
import ReactMarkdown from "react-markdown";
import NaoEncontrada from "../NaoEncontrada";
import PaginaPadrao from "../../componentes/PaginaPadrao";
import PostCard from "../../componentes/PostCard";

export default function Post() {
  const parametros = useParams();

  const post = posts.find((post) => {
    return post.id === Number(parametros.id);
  });

  if (!post) {
    return <NaoEncontrada />;
  }

  // Filtro para pegar os outros posts que não são o post atual
  const otherPosts = posts.filter((p) => p.id !== post.id).slice(0, 4);

  return (
    <Routes>
      <Route path="*" element={<PaginaPadrao />}>
        <Route
          index
          element={
            <PostModelo
              fotoCapa={`/assets/posts/${post.id}/capa.png`}
              titulo={post.titulo}
            >
              <div className="post-markdown-container">
                <ReactMarkdown>{post.texto}</ReactMarkdown>
              </div>

              {/*
              Desafio - "08. Desafio: implementando posts recomendados"
              */}
              <div className="post-recomendados">
                <h3>Outros posts que você pode gostar:</h3>
                <ul className="post-recomendados-lista">
                  {otherPosts.map((otherPosts) => (
                    <li key={otherPosts.id}>
                      <PostCard post={otherPosts} />
                    </li>
                  ))}
                </ul>
              </div>
            </PostModelo>
          }
        />
      </Route>
    </Routes>
  );
}
