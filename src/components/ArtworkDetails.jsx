import { useLoaderData, useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";


const ArtworkDetails = () => {

    const artworks = useLoaderData()
    // console.log(artworks);

    const routeId = useParams()
    const idStr = routeId.id
    const id = parseInt(idStr)
    console.log(id);

    let selectedArt = artworks.find(item => item.id === id)
    console.log(selectedArt.id);



    return (
        <div className="mx-auto">
            <div className="card bg-base-100 shadow-xl">
                <figure><img src={selectedArt.image} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                    {selectedArt.item_name}
                        <div className="badge badge-primary">{selectedArt.rating} <span className="pl-1"><FaStar /></span></div>
                    </h2>
                    <h2 className="card-title text-red-500"> Price-
                    <span>${selectedArt.price}</span>
                    </h2>
                    <p>{selectedArt.short_description}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">{selectedArt.stockStatus}</div>
                        <div className="badge badge-outline">{selectedArt.processing_time}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArtworkDetails;