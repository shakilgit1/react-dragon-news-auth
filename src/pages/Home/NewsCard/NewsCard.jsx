import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  const {_id, title, image_url, details } = news;
  return (
    <div className="card bg-base-100 shadow-xl border-b-2 mb-6">
      <figure>
        <img
          src={image_url}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        {
          details.length > 200 ? <p>{details.slice(0,200)}
          <Link to={`/news/${_id}`} className="text-blue-600 font-semibold">Read More...</Link></p>
           :
          <p>{details}</p>
        }
       
      </div>
    </div>
  );
};

NewsCard.propTypes = {
  news: PropTypes.object,
};

export default NewsCard;
