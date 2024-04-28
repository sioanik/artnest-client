import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../components/AuthProvider";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const MyArtList = () => {

    const { user } = useContext(AuthContext)

    const [myItem, setMyItem] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/mycrafts/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setMyItem(data)
                console.log(data);
            })
    }, [])


    return (
        <div>
            <div className="p-10">
                <p className="text-2xl text-center py-8">My Items</p>
                <p className="text-center">Embark on a journey of personalized creativity as you delve into our exclusive collection of your own crafted treasures. Explore unique crafts and items meticulously crafted with your passion, ready to fuel your next creative endeavor.</p>
            </div>
            <div>
                {
                    myItem.map((item, idx) => <div key={idx}>
                        <div className="card bg-base-100 py-10 shadow-xl">
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
                                <p>Customization- <span>{item.customization}</span></p>

                                <p>Stock Status- <span>{item.stockStatus}</span></p>

                                <div className="card-actions justify-start gap-10 flex pt-4">
                                    <div className="card-actions">
                                        <Link to={`/update-craft/${item._id}`}><button className="btn btn-primary">Update</button></Link>

                                    </div>
                                    <div className="card-actions">
                                        <Link><button className="btn btn-primary">Delete</button></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>)
                }

            </div>
        </div>
    );
};



export default MyArtList;