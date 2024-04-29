import { useLoaderData } from "react-router-dom";
import AllItemsTable from "../components/AllItemsTable";


const AllItems = () => {

    const crafts = useLoaderData()
    // console.log(crafts[1].email);

    return (
        <div className="w-2/3 mx-auto">
            <div className=" ">
                <p className="text-2xl text-center py-8">Browse All Items</p>
                <p className="text-center">Dive into a world of endless creativity as you explore our curated selection of artisanal treasures. Discover unique crafts and items crafted with passion, waiting to inspire your next masterpiece.</p>
            </div>
            <div>
                <div className="ml-20 mt-20 overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Rating</th>
                                <th></th>
                            </tr>
                        </thead>
                        
                        {
                            crafts.map((item, idx) => <AllItemsTable key={idx} item={item}></AllItemsTable>)
                        }

                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllItems;