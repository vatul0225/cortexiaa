import Navbar from "../Components/Navbar";
import HeroSection from "../Components/Hero";
import BrandBoostSection from "../Components/BrandBoost";
import About from "../Components/About";
import Service from "../Components/Service";
import Work from "../Components/Work";
import Charges from "../Components/Charges";
// import Meet from "../Components/Meet";
import FAQ from "../Components/FAQ"
import ClientSays from "../Components/ClientSays";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <div id="home" className="min-h-screen bg-[#f5f1e8]">
      <Navbar />
      <HeroSection />
      <BrandBoostSection />
      <About />
      <Service />
      <Work />
      <Charges />
      {/* <Meet /> */}
      <FAQ />
      <ClientSays />
      <Footer />
    </div>
  );
};

export default Home;
