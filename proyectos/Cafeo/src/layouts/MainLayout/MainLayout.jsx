import { Outlet } from 'react-router-dom';
import Footer from '@/components/section/Footer/Footer';
import Header from '@/components/section/Header/Header';

const MainLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
