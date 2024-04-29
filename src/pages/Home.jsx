import ArtistSpotlight from "../components/ArtistSpotlight";
import ArtworksSection from "../components/ArtworksSection";
import Banner from "../components/Banner";
import Testimonial from "../components/Testimonial";

const Home = () => {
    return (
        <div className="mx-auto">
            <Banner></Banner>
            <ArtworksSection></ArtworksSection>
            <ArtistSpotlight></ArtistSpotlight>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;