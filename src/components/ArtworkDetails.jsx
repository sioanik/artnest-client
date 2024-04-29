import { useLoaderData, useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";


const ArtworkDetails = () => {


    const { id } = useParams()


    const [item, setItem] = useState({})

    useEffect(() => {
        fetch(`http://localhost:5000/artworkDetails/${id}`)
            .then(res => res.json())
            .then(data => {
                setItem(data)
                console.log(data);
            })
    }, [id])


    const selectedArt = item








    // const artworks = useLoaderData()
    // console.log(artworks);

    // const routeId = useParams()
    // const idStr = routeId.id
    // const id = parseInt(idStr)
    // console.log(routeId);

    // let selectedArt = artworks.find(item => item._id === routeId)
    // console.log(selectedArt);



    return (
        <div className="mx-auto">
            <div className="card bg-base-100 w-1/2 mx-auto shadow-xl">
                <figure><img className="" src={selectedArt.image} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {selectedArt.item_name}
                        <div className="badge badge-primary">{selectedArt.rating} <span className="pl-1"><FaStar /></span></div>
                    </h2>
                    <h2 className="card-title text-red-500"> Price-
                        <span>${selectedArt.price}</span>
                    </h2>
                    <p>{selectedArt.subcategory_Name}</p>
                    <p>{selectedArt.description}</p>
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