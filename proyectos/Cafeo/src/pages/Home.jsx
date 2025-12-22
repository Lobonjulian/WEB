import { stepsSection, benefitsSection, paymentSection } from '@/data/home';
import DrinkMaker from '@/components/section/DrinkMaker/DrinkMaker';
import Features from '@/components/common/Features/Features';
import Hero from '@/components/section/Hero/Hero';
import Reward from '@/components/section/Reward/Reward';

const Home = () => {
  return (
    <>
      <Hero />
      <Features section={stepsSection} />
      <Reward />
      <DrinkMaker />
      <Features section={benefitsSection} />
      <Features section={paymentSection} />
    </>
  );
};

export default Home;
