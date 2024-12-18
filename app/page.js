import About from "./components/About";
import AchievementsSection from "./components/Achievements";
import Email from "./components/Email";
import Footer from "./components/Footer";
import HeroSlider from "./components/HeroSlider";
import MyWorks from "./components/MyWorks";
import Navbar from "./components/NavBar";
import '/app/globals.css';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSlider />
        <AchievementsSection />
        <About />
        <MyWorks/>
        <Email />
      </div>
      <Footer />
    </main>
  );
}
