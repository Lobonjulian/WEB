import { featuresData, features } from "./data/featuresData";
import { payment, paymentItems } from "./data/paymentData";
import { steps, stepsData } from "./data/stepsData";
import Features from "./components/Section/Features/Features";
import Header from "./components/Header/Header";
import Hero from "./components/Section/Hero/Hero";
import Reward from "./components/Section/Reward/Reward";
import DrinkMaker from "./components/Section/DrinkMaker/DrinkMaker";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Hero image={"https://placehold.co/200x200?text=Cafeo&font=Oswald"} />
      <Features
        title={steps.title}
        description={steps.description}
        items={stepsData}
      />
      <Reward />
      <DrinkMaker />
      <Features
        title={features.title}
        description={features.description}
        items={featuresData}
      />
      <Features
        title={payment.title}
        description={payment.description}
        items={paymentItems}
        variant="row"
      />
      <Footer />
    </>
  );
}

export default App;
