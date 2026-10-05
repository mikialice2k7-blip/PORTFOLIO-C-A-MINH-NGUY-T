import React, { useState, useRef } from 'react';
import { ArrowUpRight, Sparkles, FileText, Send, MapPin, GraduationCap } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroSectionProps {
  onOpenCVModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenCVModal }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotX = -((y - centerY) / centerY) * 16;
    const rotY = ((x - centerX) / centerX) * 16;

    setTilt({ x: rotX, y: rotY });
    setGlare({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.65
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setGlare({ x: 50, y: 50, opacity: 0 });
  };

  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background celestial glow effects */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[550px] sm:w-[750px] h-[550px] sm:h-[750px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(244,208,104,0.08) 0%, rgba(28,37,65,0.4) 40%, rgba(11,19,43,0) 75%)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Text & Narrative */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            
            {/* Celestial meaning indicator - clean unboxed metadata */}
            <div className="flex items-center gap-2.5 text-xs tracking-wider uppercase text-[#F4D068] font-medium">
              <Sparkles className="w-3.5 h-3.5 text-[#F4D068] animate-pulse" />
              <span>Minh Nguyệt · Vầng Trăng Sáng Giữa Trời Đêm</span>
            </div>

            {/* Name Heading with balance */}
            <h1 className="font-cinzel text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15] text-balance">
              Nguyễn Thị <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4D068] via-[#FFE082] to-[#E0E1DD] drop-shadow-[0_0_25px_rgba(244,208,104,0.25)]">
                Minh Nguyệt
              </span>
            </h1>

            {/* Sub-headline: Role & Positioning */}
            <div className="space-y-3">
              <p className="text-lg sm:text-xl font-medium text-[#E0E1DD] flex flex-wrap items-center justify-center lg:justify-start gap-2">
                <span className="text-[#F4D068] font-semibold">Sinh viên năm 2</span>
                <span aria-hidden="true">·</span>
                <span>Ngành Kinh tế quốc tế</span>
                <span aria-hidden="true">·</span>
                <span className="text-[#E0E1DD]/90">Trường Đại học Ngoại thương (FTU)</span>
              </p>
              <p className="text-sm sm:text-base text-[#E0E1DD]/75 max-w-xl leading-relaxed">
                {PERSONAL_INFO.heroTagline}
              </p>
            </div>

            {/* Unboxed Metadata Trust Markers with Liquid Glass Touch */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-4 gap-y-2 text-xs text-[#E0E1DD]/70 pt-1">
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#1C2541]/40 border border-[#E0E1DD]/10 backdrop-blur-sm">
                <GraduationCap className="w-3.5 h-3.5 text-[#F4D068]" />
                <span className="text-white font-medium">FTU Khóa 64 (K64)</span>
              </div>
              <span aria-hidden="true" className="text-[#F4D068]/40">·</span>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#F4D068]" />
                <span>Đống Đa, Hà Nội</span>
              </div>
              <span aria-hidden="true" className="text-[#F4D068]/40">·</span>
              <div className="flex items-center gap-1.5">
                <span className="font-semibold text-[#F4D068]">MOS 1000/1000</span>
                <span>Word</span>
              </div>
              <span aria-hidden="true" className="text-[#F4D068]/40">·</span>
              <div>
                <span className="font-semibold text-[#F4D068]">IELTS 6.5</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 w-full sm:w-auto">
              <button
                onClick={onOpenCVModal}
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-[#0B132B] bg-gradient-to-r from-[#F4D068] to-[#FFE082] rounded-xl moon-glow-btn cursor-pointer whitespace-nowrap"
              >
                <FileText className="w-4 h-4" />
                <span>Xem CV của tôi</span>
                <ArrowUpRight className="w-4 h-4 text-[#0B132B]/70" />
              </button>

              <button
                onClick={() => {
                  const target = document.querySelector('#contact');
                  if (target) {
                    const headerOffset = 76;
                    const elementPosition = target.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                  }
                }}
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-medium text-[#E0E1DD] bg-[#1C2541]/80 hover:bg-[#1C2541] border border-[#E0E1DD]/20 hover:border-[#F4D068]/50 rounded-xl transition-all whitespace-nowrap cursor-pointer shadow-lg"
              >
                <Send className="w-4 h-4 text-[#F4D068]" />
                <span>Liên hệ với tôi</span>
              </button>
            </div>

            {/* Mini Quote / Lunar Motto */}
            <div className="pt-4 border-t border-[#E0E1DD]/10 w-full max-w-lg">
              <blockquote className="italic text-xs sm:text-sm text-[#E0E1DD]/60 font-light">
                &ldquo;Ánh trăng soi rọi dòng chảy kinh tế — Kỷ luật trong phân tích, sáng tạo trong giải pháp, vươn mình ra biển lớn.&rdquo;
              </blockquote>
            </div>

          </div>

          {/* Right Column: 3D Tilt Parallax Moon & Portrait Composition */}
          <div className="lg:col-span-5 flex justify-center items-center relative perspective-1000 py-6">
            
            {/* Celestial Orbit Ring 1 */}
            <div 
              className="absolute w-[360px] h-[360px] sm:w-[440px] sm:h-[440px] rounded-full border border-dashed border-[#F4D068]/20 animate-orbit pointer-events-none"
              style={{
                transform: `rotate(${tilt.y * 1.5}deg)`,
                transition: 'transform 0.2s ease-out'
              }}
              aria-hidden="true"
            >
              {/* Little orbiting star node */}
              <div className="absolute -top-1.5 left-1/2 w-3 h-3 bg-[#F4D068] rounded-full shadow-[0_0_12px_#F4D068]" />
            </div>

            {/* Celestial Orbit Ring 2 */}
            <div 
              className="absolute w-[310px] h-[310px] sm:w-[380px] sm:h-[380px] rounded-full border border-[#E0E1DD]/10 pointer-events-none"
              style={{
                transform: `rotate(${-tilt.x * 1.2}deg)`,
                transition: 'transform 0.2s ease-out'
              }}
              aria-hidden="true"
            />

            {/* Interactive 3D Tilt Moon Frame */}
            <div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative cursor-pointer preserve-3d will-change-transform"
              style={{
                transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale3d(1.02, 1.02, 1.02)`,
                transition: tilt.x === 0 && tilt.y === 0 ? 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)' : 'transform 0.1s ease-out',
              }}
            >
              
              {/* Crescent Moon Backglow Aura */}
              <div 
                className="absolute -inset-6 sm:-inset-8 rounded-full opacity-65 group-hover:opacity-90 transition-opacity blur-2xl pointer-events-none"
                style={{
                  background: 'radial-gradient(circle at 70% 30%, rgba(244,208,104,0.5) 0%, rgba(58,80,107,0.35) 50%, transparent 75%)',
                  transform: 'translateZ(-15px)'
                }}
              />

              {/* Liquid Glass Outer Crescent Rim */}
              <div 
                className="relative p-2.5 sm:p-3 rounded-full bg-gradient-to-tr from-[#1C2541]/90 via-[#F4D068]/35 to-[#F4D068] shadow-[0_0_50px_rgba(244,208,104,0.3)] border border-[#F4D068]/50 preserve-3d backdrop-blur-md"
                style={{ transform: 'translateZ(25px)' }}
              >
                
                {/* Portrait Image Holder with Specular Reflection */}
                <div className="relative w-64 h-80 sm:w-72 sm:h-92 rounded-[130px] overflow-hidden bg-[#1C2541] shadow-2xl preserve-3d">
                  <img
                    src="/src/assets/images/nguyet_portrait_1791219174977.jpg"
                    alt="Chân dung Nguyễn Thị Minh Nguyệt - Sinh viên Kinh tế quốc tế FTU"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center filter contrast-105 transition-transform duration-500"
                    style={{ transform: 'scale(1.04)' }}
                  />
                  
                  {/* Dynamic Specular Liquid Glare Overlay */}
                  <div
                    className="absolute inset-0 pointer-events-none transition-opacity duration-300 mix-blend-screen"
                    style={{
                      background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255, 255, 255, 0.35) 0%, rgba(244, 208, 104, 0.2) 25%, transparent 65%)`,
                      opacity: glare.opacity,
                    }}
                  />

                  {/* Inner moonlight gradient scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B132B]/85 via-transparent to-transparent pointer-events-none" />

                  {/* Bottom Portrait Tagline */}
                  <div 
                    className="absolute bottom-3 left-0 right-0 px-4 text-center preserve-3d"
                    style={{ transform: 'translateZ(35px)' }}
                  >
                    <p className="font-cinzel text-xs font-bold text-[#F4D068] tracking-widest uppercase drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                      Minh Nguyệt
                    </p>
                    <p className="text-[10px] text-[#E0E1DD]/90 font-medium drop-shadow">
                      Kinh tế Quốc tế · FTU K64
                    </p>
                  </div>
                </div>

              </div>

              {/* Floating Liquid Glass Badge with High Z-Depth */}
              <div 
                className="absolute -bottom-3 -right-2 sm:-right-4 liquid-glass px-4 py-2.5 rounded-xl border border-[#F4D068]/40 shadow-2xl flex items-center gap-2.5"
                style={{
                  transform: 'translateZ(55px)',
                  transition: 'transform 0.2s ease-out'
                }}
              >
                <div className="w-2.5 h-2.5 rounded-full bg-[#F4D068] shadow-[0_0_10px_#F4D068] animate-ping" />
                <span className="text-xs font-semibold text-white">Sẵn sàng kết nối cơ hội & dự án</span>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

