import { useEffect, useState } from "react";
import Artwork from "./Artwork";

const ArtworksSection = () => {

    const [artworks, setArtworks] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/artworks/')
            .then(res => res.json())
            .then(data => setArtworks(data))
    }, [])

    return (
        <div>
            {/* <p>{artworks.length}</p> */}
            <div className="grid grid-cols-2 gap-32 m-24">
                {
                    artworks.map(item => <Artwork key={item.id} artwork={item}></Artwork>)
                }
            </div>
        </div>
    );
};

export default ArtworksSection;