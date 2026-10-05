import React, { useState } from 'react';
import { MoonCursor } from './components/MoonCursor';
import { LiquidMeshBackground } from './components/LiquidMeshBackground';
import { Starfield } from './components/Starfield';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillsEducationSection } from './components/SkillsEducationSection';
import { ProjectsSection } from './components/ProjectsSection';
import { HonorsSection } from './components/HonorsSection';
import { ContactSection } from './components/ContactSection';
import { CVModal } from './components/CVModal';

export default function App() {
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#0B132B] text-[#E0E1DD] overflow-x-hidden selection:bg-[#F4D068]/30 selection:text-[#F4D068]">
      {/* Custom Glowing Lunar Mouse Cursor */}
      <MoonCursor />

      {/* Fluid Liquid Glass Mesh Background */}
      <LiquidMeshBackground />

      {/* Dynamic Celestial Starfield with Shooting Stars */}
      <Starfield />

      {/* Top Navigation */}
      <Navbar onOpenCVModal={() => setIsCVModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="relative z-10">
        {/* 1. Hero Section (Mặt trăng khuyết 3D Tilt) */}
        <HeroSection onOpenCVModal={() => setIsCVModalOpen(true)} />

        {/* 2. About Me (Hành trình dưới ánh trăng) */}
        <AboutSection />

        {/* 3. Skills & Education (Các chòm sao tri thức) */}
        <SkillsEducationSection />

        {/* 4. Featured Projects (Kho tàng nguyệt quế CLB) */}
        <ProjectsSection />

        {/* 5. Honors & Certifications (Thành tích & Minh chứng) */}
        <HonorsSection />

        {/* 6. Contact & Footer (Kết nối) */}
        <ContactSection onOpenCVModal={() => setIsCVModalOpen(true)} />
      </main>

      {/* Interactive CV Preview & Printable Modal */}
      <CVModal
        isOpen={isCVModalOpen}
        onClose={() => setIsCVModalOpen(false)}
      />
    </div>
  );
}

