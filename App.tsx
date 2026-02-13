import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { AiPlanner } from './components/AiPlanner';
import { Works } from './components/Works';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="font-sans antialiased bg-wood-50 text-wood-900 selection:bg-wood-300 selection:text-wood-900">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <AiPlanner />
        <Works />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
