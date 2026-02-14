import React from 'react';
import { BrowserRouter as Router, Routes, Route, ScrollRestoration } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { WorksPage } from './pages/WorksPage';
import { WorkDetailPage } from './pages/WorkDetailPage';

function ScrollToTop() {
  return <ScrollRestoration />;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="font-sans antialiased bg-wood-50 text-wood-900 selection:bg-wood-300 selection:text-wood-900">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/works" element={<WorksPage />} />
          <Route path="/works/:id" element={<WorkDetailPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
