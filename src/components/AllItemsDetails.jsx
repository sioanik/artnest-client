import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaStar } from "react-icons/fa";

const AllItemsDetails = () => {

    const { id } = useParams()
    // console.log(id);
    const [item, setItem] = useState({})

    useEffect(() => {
        fetch(`https://artnest-server-eta.vercel.app/singleAllCraft/${id}`)
            .then(res => res.json())
            .then(data => {
                setItem(data)
                // console.log(data);
            })
    }, [id])

    return (
        <div className="w-[80%] mx-auto my-14 card bg-base-100 py-10 shadow-xl">
            <figure><img src={item.image} className="" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {item.item_name}
                    <div className="badge badge-primary">{item.rating} <span className="pl-1"><FaStar /></span></div>
                </h2>
                <h2 className="card-title text-red-500"> Price-
                    <span>${item.price}</span>
                </h2>
                <p>{item.description}</p>
                <p>Subcategory Name- <span>{item.subcategory_Name}</span></p>

                {
                    item.customization === 'yes' ? (<p>Customization Available</p>) : (<p>Customization not Available</p>)

                }

                <p>Stock Status- <span>{item.stockStatus}</span></p>


            </div>
        </div>
    );
};

export default AllItemsDetails;