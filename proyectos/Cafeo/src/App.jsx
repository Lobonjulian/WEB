import { Routes, Route } from 'react-router-dom';
import GiftCardPage from '@/pages/GiftCardPage';
import Home from '@/pages/Home';
import MainLayout from '@/layouts/MainLayout/MainLayout';
import MenuPage from '@/pages/MenuPage';
import RewardsPage from '@/pages/RewardsPage';

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/reward" element={<RewardsPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/gift-card" element={<GiftCardPage />} />
      </Route>
    </Routes>
  );
}

export default App;
