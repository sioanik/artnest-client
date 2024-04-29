import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CatAllItemsCard from "./CatAllItemsCard";


const CategoryAllItems = () => {

    const [catItems, setCatItems] = useState([])

    const { url } = useParams()
    const urlWithGap = url.replace(/-/g, ' ')
    console.log(urlWithGap);



    useEffect(() => {
        fetch(`http://localhost:5000/catItems/${urlWithGap}`)
            .then(res => res.json())
            .then(data => {
                setCatItems(data)
                console.log(data);
            })
    }, [])


    return (
        <div>
            {
              catItems.map((item, idx)=> <CatAllItemsCard key={idx} item = {item}></CatAllItemsCard>)  
            }
        </div>
    );
};

export default CategoryAllItems;