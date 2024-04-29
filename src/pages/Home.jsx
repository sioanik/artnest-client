import ArtistSpotlight from "../components/ArtistSpotlight";
import ArtworksSection from "../components/ArtworksSection";
import Banner from "../components/Banner";
import CategoriesSec from "../components/CategoriesSec";
import Testimonial from "../components/Testimonial";

const Home = () => {
    return (
        <div className="mx-auto">
            <Banner></Banner>
            <ArtworksSection></ArtworksSection>
            <CategoriesSec></CategoriesSec>
            <ArtistSpotlight></ArtistSpotlight>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;