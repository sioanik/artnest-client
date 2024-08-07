import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../components/AuthProvider";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyArtList = () => {

    const { user } = useContext(AuthContext)

    const [myAllItem, setMyAllItem] = useState([])
    const [myItem, setMyItem] = useState([])

    // const remaining = myItem.filter(item => item._id !== id )

    const custAvailable = myAllItem.filter(item => item.customization == 'yes')
    console.log(custAvailable);

    const custUnavailable = myAllItem.filter(item => item.customization == 'no')
    console.log(custUnavailable);





    useEffect(() => {
        fetch(`https://artnest-server-eta.vercel.app/mycrafts/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setMyAllItem(data)
                setMyItem(data)
                console.log(data);
            })
    }, [])


    const handleCustomizable = () => {
        setMyItem(custAvailable)
    }

    const handleNotCustomizable = () => {
        setMyItem(custUnavailable)
    }


    const handleDeleteCraft = (id) => {


        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        })
            .then((result) => {
                if (result.isConfirmed) {
                    //   Swal.fire({
                    //     title: "Deleted!",
                    //     text: "Your file has been deleted.",
                    //     icon: "success"
                    //   });


                    fetch(`https://artnest-server-eta.vercel.app/delete/${id}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.deletedCount > 0) {
                                const remaining = myItem.filter(item => item._id !== id)
                                setMyItem(remaining)
                                Swal.fire({
                                    title: "Deleted!",
                                    text: "Your file has been deleted.",
                                    icon: "success"
                                });

                            }

                        })


                }
            })





    }


    return (
        <div className="w-2/3 mx-auto">
            <div className="p-10">
                <p className="text-2xl text-center py-8">My Items</p>
                <p className="text-center">Embark on a journey of personalized creativity as you delve into our exclusive collection of your own crafted treasures. Explore unique crafts and items meticulously crafted with your passion, ready to fuel your next creative endeavor.</p>
            </div>
            <div className="">
                <div className="flex justify-center mb-20">
                    <div className="dropdown dropdown-hover">
                        <div tabIndex={0} role="button" className="btn m-1">Filter Customization </div>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                            <li onClick={handleCustomizable}><a>Customizable</a></li>
                            <li onClick={handleNotCustomizable}><a>Not Customizable</a></li>
                        </ul>
                    </div>
                </div>
                <div className="">
                    {
                        myItem.map((item, idx) => <div key={idx}>
                            <div className="card bg-base-100 py-10 shadow-xl">
                                <figure><img src={item.image} className="max-h-48" alt="Shoes" /></figure>
                                <div className="text-center card-body">
                                    <h2 className="card-title mx-auto">
                                        {item.item_name}
                                        <div className="hidden md:badge md:badge-primary">{item.rating} <span className="pl-1"><FaStar /></span></div>
                                    </h2>
                                    <h2 className="mx-auto card-title text-red-500"> Price-
                                        <span>${item.price}</span>
                                    </h2>
                                    <h2 className="md:hidden mx-auto flex"> Rating-
                                        <span className="flex items-center gap-1 pl-1">{item.rating}< FaStar /></span>
                                        
                                    </h2>
                                    <p className="lg:px-20">{item.description}</p>

                                    {
                                        item.customization === 'yes' ? (<p>Customization Available</p>) : (<p>Customization not Available</p>)

                                    }

                                    <p>Stock Status- <span>{item.stockStatus}</span></p>

                                    <div className="card-actions justify-center gap-10 flex pt-4">
                                        <div className="card-actions">
                                            <Link to={`/update-craft/${item._id}`}><button className="btn btn-primary">Update</button></Link>

                                        </div>
                                        <div className="card-actions">
                                            <button onClick={() => handleDeleteCraft(item._id)} className="btn btn-primary">Delete</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>)
                    }

                </div>
            </div>
        </div>
    );
};



export default MyArtList;