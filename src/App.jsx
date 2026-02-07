import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import EggPrice from './pages/EggPrice';
import ChickPrice from './pages/ChickPrice';
import ChickenPrice from './pages/ChickenPrice';
import LiftingSale from './pages/LiftingSale';
import LiftingSaleDetails from './pages/LiftingSaleDetails';
import { Toaster } from 'react-hot-toast';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/egg-rate" element={<EggPrice />} />
          <Route path="/chick-rate" element={<ChickPrice />} />
          <Route path="/chicken-rate" element={<ChickenPrice />} />
          <Route path="/lifting-sale" element={<LiftingSale />} />
          <Route path="/lifting-sale/:id" element={<LiftingSaleDetails />} />
          {/* Add Login/Register placeholders if needed, or redirect to home for now */}
          <Route path="/login" element={<div className="p-8 text-center">Login Page Placeholder</div>} />
          <Route path="/register" element={<div className="p-8 text-center">Register Page Placeholder</div>} />
        </Routes>
      </Layout>
      <Toaster position="top-right" />
    </Router>
  );
}

export default App;
