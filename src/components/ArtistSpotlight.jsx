import { useEffect, useState } from "react";
import ArtistCard from "./ArtistCard";


const ArtistSpotlight = () => {

    const [artist, setAtrist] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/artists/')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setAtrist(data);
            })
    }, [])

    return (
        <div>
            <div className=" w-[80%] mx-auto">
                <p className="text-2xl text-center py-8">Artist Spotlight</p>
                <p className="text-center">Explore the brilliance of our featured artist, delving into their unique style and captivating creations. Immerse yourself in a world of artistic mastery.</p>
            </div>
            <div className="grid grid-cols-2 gap-10 m-24">
                {
                    artist.map((item, idx) => <ArtistCard key={idx} item={item}></ArtistCard>)
                }
            </div>
        </div>
    );
};

export default ArtistSpotlight;