// import "./styles/Contact.css";

import {useLocation} from "react-router-dom";




function Contact() {

  const queryString = useLocation().search;

  let queryParams = new URLSearchParams(queryString);

  const search = queryParams.get("search")

  return (
      <div className="Contact">
        <h2>{search}</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, ullam eos dignissimos aperiam rerum qui
          suscipit cum nobis, totam ea tenetur perferendis praesentium corporis possimus ducimus et minima voluptatum.
          Numquam mollitia culpa consectetur unde illum est aut dicta eligendi vero molestias impedit sint, maiores
          saepe voluptas necessitatibus excepturi ducimus repudiandae, non quidem nobis veritatis!</p>
      </div>
  );
}

export default Contact;
