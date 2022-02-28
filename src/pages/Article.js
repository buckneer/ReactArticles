// import "./styles/Article.css";
import {useNavigate, useParams} from "react-router-dom";
import {useFetch} from "./hooks/useFetch";
import {useEffect} from "react";

function Article() {

  const { id } = useParams()

  let url = "http://localhost:3000/articles/" + id;

  const {data: article, isPending, error} = useFetch(url);

  let navigate = useNavigate();


  useEffect(() => {
    if(error) {

      setTimeout(() => {
        navigate("/");
      }, 2000)

    }
  }, [error, navigate])

  return (
      <div className="Article">
        {isPending && <div>Loading ...</div>}
        {error && <div>{error}</div>}
        {article && (
            <div>
              <h2>{article.title}</h2>
              <p>By {article.author}</p>
              <p>{article.body}</p>
            </div>
        )}
      </div>
  );
}

export default Article;
