import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import OrganGrid from "../components/OrganGrid";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />

      <section id="home">
        <Hero />
      </section>

      <section id="organs">
        <OrganGrid />
      </section>

      <Footer />
    </>
  );
}

export default Home;