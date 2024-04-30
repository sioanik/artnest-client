import { Link } from "react-router-dom";

const AllItemsTable = ({ item }) => {
    // console.log(item);
    return (
        <tbody>
            {/* row 1 */}
            <tr>

                <td>

                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={item.image} />
                        </div>
                    </div>

                </td>
                <td>


                    <div className="font-bold">{item.item_name}</div>


                </td>
                <td>
                    ${item.price}
                </td>
                <td>{item.rating}</td>
                <th>
                    <Link to={`/item-details/${item._id}`}><button className="btn btn-ghost btn-xs">Details</button></Link>
                </th>
            </tr>

        </tbody>

    );
};

export default AllItemsTable;