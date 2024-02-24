import { Link } from 'react-router-dom';
import { IMG_URL } from '../data/constants';

const RestaurantCard = ({
  id,
  name,
  cuisines,
  avgRating,
  costForTwo,
  cloudinaryImageId,
}) => {
  return (
    <Link to={'/restaurant/' + id}>
      <div className="w-[200px] h-[300px] p-2 m-2 shadow-lg bg-pink-50 rounded-lg">
          <div
            style={{
              height: "120px",
              weight: "120px",
              position: "relative",
              backgroundImage: `url(${IMG_URL}/${cloudinaryImageId})`,
              backgroundSize: "cover",
              borderRadius: "10px 10px 0 0",
            }}
          ></div>
          <div className="font-bold text-xl">{name}</div>
          <div>Price: {costForTwo}</div>
          <div className="text-yellow-900 p-2">
            {"⭐ "}
            {avgRating}
          </div>
          <div className="text-yellow-900">
            {cuisines.length > 5
              ? cuisines.slice(0, 5).join(" , ") + " ..."
              : cuisines.join(" , ")}
          </div>
        </div>
    </Link>
  );
};

export default RestaurantCard;

