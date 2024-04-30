import { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";


const CategoriesSec = () => {

    const [subcats, setSubcats] = useState([])

    useEffect(() => {
        fetch(`https://artnest-server-eta.vercel.app/subcategories/`)
            .then(res => res.json())
            .then(data => {
                setSubcats(data)
                // console.log(data);
            })
    }, [])

    return (
        <div className="w-[80%] mx-auto my-14">
            <div className="">
                <p className="text-2xl text-center py-8">Explore Our Artistic Categories</p>
                <p className="text-center">Discover a vibrant collection of fine art and creative masterpieces. From captivating landscapes to expressive portraits, find inspiration for your next artistic endeavor.</p>
            </div>
            <div className="grid grid-cols-2 mt-16 gap-2 md:gap-10">
                {
                    subcats.map((item, idx) => <CategoryCard key={idx} item={item}></CategoryCard>)
                }
            </div>
        </div>
    );
};

export default CategoriesSec;