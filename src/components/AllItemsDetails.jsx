import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaStar } from "react-icons/fa";

const AllItemsDetails = () => {

    const { id } = useParams()
    // console.log(id);
    const [item, setItem] = useState({})

    useEffect(() => {
        fetch(`http://localhost:5000/singleAllCraft/${id}`)
            .then(res => res.json())
            .then(data => {
                setItem(data)
                console.log(data);
            })
    }, [id])

    return (
        <div className="w-2/3 mx-auto card bg-base-100 py-10 shadow-xl">
            <figure><img src={item.image} className="max-h-48" alt="Shoes" /></figure>
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

                <p>Customization- <span>{item.customization}</span></p>

                <p>Stock Status- <span>{item.stockStatus}</span></p>

               
            </div>
        </div>
    );
};

export default AllItemsDetails;