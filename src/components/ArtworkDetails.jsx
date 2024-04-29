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
        <div className="w-[80%] mx-auto my-14">
            <div className="card bg-base-100 shadow-xl">
                <figure><img className="" src={selectedArt.image} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {selectedArt.item_name}
                        <div className="badge badge-primary">{selectedArt.rating} <span className="pl-1"><FaStar /></span></div>
                    </h2>
                    <h2 className="card-title text-red-500"> Price-
                        <span>${selectedArt.price}</span>
                    </h2>
                    <p className="">Category- <span>{selectedArt.subcategory_Name}</span></p>
                    <p>{selectedArt.description}</p>
                    <p>Processing Time- {selectedArt.processing_time}</p>

                    {
                        selectedArt.customization === 'yes'? (<p>Customization Available</p>) : (<p>Customization not Available</p>)
                       
                    }


                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">{selectedArt.stockStatus}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArtworkDetails;