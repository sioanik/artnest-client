import { Link } from "react-router-dom";

const Artwork = ({ artwork }) => {
    // console.log(artwork.image);
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure className="h-60"><img src={artwork.image} alt="artwork" className="w-full h-full object-contain" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{artwork.item_name}</h2>
                    <p>{artwork.short_description}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/artwork-details/${artwork.id}`}>
                        <button className="btn btn-primary">Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Artwork;