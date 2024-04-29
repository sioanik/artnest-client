import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const CatAllItemsCard = ({ item }) => {
    console.log(item);
    return (
        <div>
            <div className="card bg-base-100 py-10 shadow-xl">
                <figure><img src={item.image} className="max-h-48" alt="Shoes" /></figure>
                <div className="text-center card-body">
                    <h2 className="card-title mx-auto">
                        {item.item_name}
                        <div className="badge badge-primary">{item.rating} <span className="pl-1"><FaStar /></span></div>
                    </h2>
                    <h2 className="mx-auto card-title text-red-500"> Price-
                        <span>${item.price}</span>
                    </h2>
                    <p>{item.subcategory_Name}</p>
                    <p>{item.description}</p>
                    <p>Processing Time- <span>{item.processing_time}</span></p>


                    <div className="card-actions justify-center gap-10 flex pt-4">
                        <div className="card-actions">
                            <Link to={`/artwork-details/${item._id}`}>
                                <button className="btn btn-primary">Details</button>
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CatAllItemsCard;