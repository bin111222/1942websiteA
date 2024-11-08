// src/app/page.tsx
'use client';
import { Background } from '@/components/Background';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import CaseStudies from '@/components/CaseStudies';
import { Stats } from '@/components/Stats';

export default function Home() {
  return (
    <Background>
      <main className="min-h-screen flex flex-col">
        <div className="flex-grow">
          <Hero />
          <Services />
          <Stats />
          <CaseStudies />
        </div>
      </main>
    </Background>
  );
}