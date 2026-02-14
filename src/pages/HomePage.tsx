import React from 'react';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Services } from '../components/Services';
import { AiPlanner } from '../components/AiPlanner';
import { Works } from '../components/Works';
import { Contact } from '../components/Contact';

export const HomePage: React.FC = () => {
    return (
        <main>
            <Hero />
            <About />
            <Services />
            <AiPlanner />
            <Works />
            <Contact />
        </main>
    );
};
