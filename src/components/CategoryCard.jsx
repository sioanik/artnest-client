import { Link } from "react-router-dom";

const CategoryCard = ({ item }) => {



  console.log(item);
  return (
    <div>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure className="max-h-48 max-w-96"><img src={item.image} alt="Album" /></figure>
        <div className="card-body">
          <h2 className=" text-xl font-bold text-center">{item.subcategory_Name}</h2>
          {/* <p>{item.specialty}</p> */}
          <Link to={`/category-items/${item.url}`}>
          <div className="card-actions justify-end">
            
            <button className="btn btn-block bg-primary text-white">Browse</button>
            
          </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;