import { stepsSection, benefitsSection, paymentSection } from '@/data/home';
import DrinkMaker from '@/components/Section/DrinkMaker/DrinkMaker';
import Features from '@/components/common/Features/Features';
import Hero from '@/components/Section/Hero/Hero';
import Header from '@/components/Layouts/Header/Header ';
import Footer from '@/components/Layouts/Footer/Footer ';

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Features section={stepsSection} />
      <Reward />
      <DrinkMaker />
      <Features section={benefitsSection} />
      <Features section={paymentSection} />
      <Footer />
    </>
  );
};

export default Home;
