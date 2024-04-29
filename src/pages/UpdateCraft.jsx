import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../components/AuthProvider";
import Swal from 'sweetalert2'
import { useParams } from "react-router-dom";


const UpdateCraft = () => {

    const { user } = useContext(AuthContext)

    const { id } = useParams()
    // console.log(id);

    const [item, setItem] = useState({})

    useEffect(() => {
        fetch(`http://localhost:5000/updateCraft/${id}`)
            .then(res => res.json())
            .then(data => {
                setItem(data)
                console.log(data);
            })
    }, [id])

    const handleUpdateCraft = (e) => {
        e.preventDefault()
        const form = e.target
        const item_name = form.item_name.value
        // const subcategory_Name = form.subcategory_Name.value
        const price = form.price.value
        // const customization = form.customization.value
        const image = form.image.value
        const rating = form.rating.value
        const processing_time = form.processing_time.value
        // const stockStatus = form.stockStatus.value
        const description = form.description.value
        const username = form.username.value
        const email = form.useremail.value

        const customizationField = document.getElementById('customization')
        const customization = customizationField.value

        const stockStatusField = document.getElementById('stock')
        const stockStatus = stockStatusField.value

        const subcategory_Field = document.getElementById('subcategory')
        const subcategory_Name = subcategory_Field.value




        const newCraft = { item_name, subcategory_Name, price, customization, image, rating, processing_time, stockStatus, description, username, email }

        console.log(newCraft);

        fetch(`http://localhost:5000/updateCrafts/${id}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newCraft),
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Craft updated successfully',
                        icon: 'success',
                        confirmButtonText: 'Close'
                    })
                } else {
                    Swal.fire({
                        title: 'Error!',
                        text: 'Something went wrong!',
                        icon: 'error',
                        confirmButtonText: 'Close'
                    })
                }
            })
    }


    return (
        <div>
            <div className="px-10">
                <p className="text-2xl text-center py-8">Add Craft Item</p>
                <p className="text-center">Unleash your creativity and showcase your craftsmanship. Share your masterpieces with the world, and let your artistry shine.</p>
            </div>
            <div className="mt-10 px-10">
                <form onSubmit={handleUpdateCraft}>
                    <div className="flex justify-center gap-6">
                        <div>
                            <label className="form-control w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text">Item Name</span>
                                </div>
                                <input defaultValue={item.item_name} type="text" name="item_name" placeholder="Name" className="input input-bordered w-full max-w-xs" />

                            </label>

                            {/* <label className="form-control w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text">Subcategory Name</span>
                                </div>
                                <input defaultValue={item.subcategory_Name} type="text" name="subcategory_Name" placeholder="Subcategory" className="input input-bordered w-full max-w-xs" />

                            </label> */}



                            <label className="form-control w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text">Subcategory Name</span>
                                </div>
                                <select className="input input-bordered w-full max-w-xs" name="" id="subcategory">
                                    <option className=" bg-green-300" value="">{item.subcategory_Name}</option>

                                    <option value="Landscape Painting">Landscape Painting</option>

                                    <option value="Portrait Drawing">Portrait Drawing</option>

                                    <option value="Watercolour Painting">Watercolour Painting</option>

                                    <option value="Oil Painting">Oil Painting</option>

                                    <option value="Charcoal Sketching">Charcoal Sketching</option>

                                    <option value="Cartoon Drawing">Cartoon Drawing</option>

                                </select>
                                {/* <input type="text" name="customization" placeholder="Yes/No" className="input input-bordered w-full max-w-xs" /> */}

                            </label>





                            <label className="form-control w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text">Price</span>
                                </div>
                                <input defaultValue={item.price} type="text" name="price" placeholder="Price" className="input input-bordered w-full max-w-xs" />

                            </label>
                            <label className="form-control w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text">Customization</span>
                                </div>
                                <select className="input input-bordered w-full max-w-xs" name="" id="customization">
                                    <option className="bg-green-300" value="">{item.customization}</option>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </select>
                                {/* <input type="text" name="customization" placeholder="Yes/No" className="input input-bordered w-full max-w-xs" /> */}

                            </label>


                        </div>
                        <div>

                            <label className="form-control w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text">Image</span>
                                </div>
                                <input defaultValue={item.image} type="url" name="image" placeholder="Image url" className="input input-bordered w-full max-w-xs" />

                            </label>



                            <label className="form-control w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text">Rating</span>
                                </div>
                                <input defaultValue={item.rating} type="text" name="rating" placeholder="Rating" className="input input-bordered w-full max-w-xs" />

                            </label>
                            <label className="form-control w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text">Processing time</span>
                                </div>
                                <input defaultValue={item.processing_time} type="text" name="processing_time" placeholder="Processing time" className="input input-bordered w-full max-w-xs" />

                            </label>
                            <label className="form-control w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text">Stock status</span>
                                </div>
                                <select className="input input-bordered w-full max-w-xs" name="" id="stock">
                                    <option className="bg-green-300" value="">{item.stockStatus}</option>
                                    <option value="In stock">In stock</option>
                                    <option value="Made to Order">Made to Order</option>
                                </select>
                                {/* <input type="text" name="stockStatus" placeholder="Stock status" className="input input-bordered w-full max-w-xs" /> */}

                            </label>

                        </div>
                    </div>
                    <div className="flex justify-center">
                        <label className="form-control w-full max-w-md">
                            <div className="label">
                                <span className="label-text">Short description</span>
                            </div>
                            <input defaultValue={item.description} type="text" name="description" placeholder="Short description" className="input input-bordered w-full max-w-md" />

                        </label>
                    </div>

                    <div className="flex justify-center mt-4">
                        <div>
                            <label className="form-control w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text">User Email</span>
                                </div>
                                <input type="email" name="useremail" placeholder="User Email" defaultValue={user.email} className="input input-bordered w-full max-w-xs" disabled />

                            </label>
                        </div>
                        <div>
                            <label className="form-control w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text">User Name</span>
                                </div>
                                <input type="text" name="username" placeholder="User Name" defaultValue={user.displayName} className="input input-bordered w-full max-w-xs" disabled />

                            </label>
                        </div>
                    </div>
                    <div className="flex justify-center"><input className="btn btn-primary mt-8" type="submit" value="Update Craft Item" /></div>
                </form>
            </div>
        </div>
    );
};

export default UpdateCraft;