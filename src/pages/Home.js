import "./styles/Home.css";
import {useFetch} from "./hooks/useFetch";
import {Link} from "react-router-dom";



export default function Home() {

  const {data: articles, isPending, error} = useFetch("http://localhost:3000/articles");


  return (
      <div className="Home">
        <h2>Articles</h2>
        {isPending && <div>Loading...</div> }
        {error && <div>{error}</div> }
        {articles && articles.map((article) => (
          <div className="card" key={article.id}>
            <h3>{article.title}</h3>
            <p>{article.author}</p>
            <Link to={`/articles/${article.id}`}>Read More ...</Link>
          </div>

        ))}
      </div>
  )
}