import { useEffect, useState } from "react";
import ArtistCard from "./ArtistCard";


const ArtistSpotlight = () => {

    const [artist, setAtrist] = useState([])

    useEffect(() => {
        fetch('https://artnest-server-eta.vercel.app/artists/')
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setAtrist(data);
            })
    }, [])

    return (
        <div className="w-[80%] mx-auto my-14">
            <div className="pb-20">
                <p className="text-2xl text-center py-8">Artist Spotlight</p>
                <p className="text-center">Explore the brilliance of our featured artist, delving into their unique style and captivating creations. Immerse yourself in a world of artistic mastery.</p>
            </div>
            <div className="flex justify-center items-center">
                <div className="grid lg:grid-cols-2 gap-4">
                    {
                        artist.map((item, idx) => <ArtistCard key={idx} item={item}></ArtistCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ArtistSpotlight;