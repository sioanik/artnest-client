import { Link } from "react-router-dom";

const Artwork = ({ artwork }) => {
    // console.log(artwork.image);

    
    return (
        <div className="">
            <div className="card bg-base-100 shadow-xl">
                <figure className="max-h-40"><img src={artwork.image} alt="artwork" className="w-full h-full object-contain" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{artwork.item_name}</h2>
                    <p>{artwork.subcategory_Name}</p>
                    <p className="text-red-500 font-bold">Price- <span>${artwork.price}</span></p>
                    <div className="card-actions justify-end">
                        <Link to={`/artwork-details/${artwork._id}`}>
                        <button className="btn btn-primary">Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Artwork;