import { useEffect, useState } from "react";
import Artwork from "./Artwork";

const ArtworksSection = () => {

    const [artworks, setArtworks] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/allcrafts/`)
            .then(res => res.json())
            .then(data => {
                setArtworks(data)
                // console.log(data);
            })
    }, [])



    // useEffect(() => {
    //     fetch('http://localhost:5000/artworks/')
    //         .then(res => res.json())
    //         .then(data => setArtworks(data))
    // }, [])

    return (
        <div className="w-[80%] mx-auto">
             <div className="pb-20">
                <p className="text-2xl text-center py-8">Crafts Showcase</p>
                <p className="text-center">Dive into a world of endless creativity as you explore our curated selection of artisanal treasures. Discover unique crafts and items crafted with passion, waiting to inspire your next masterpiece.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                {
                    artworks.slice(0,6).map((item, idx) => <Artwork key={idx} artwork={item}></Artwork>)
                }
            </div>
        </div>
    );
};

export default ArtworksSection;