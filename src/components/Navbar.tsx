import React, { useState, useEffect } from 'react';
import { Moon, Menu, X, FileText, Send } from 'lucide-react';

interface NavbarProps {
  onOpenCVModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCVModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Scroll Spy for active section
      const sections = ['contact', 'honors', 'projects', 'skills-education', 'about', 'hero'];
      const scrollPosition = window.scrollY + 140;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Giới thiệu', href: '#about', id: 'about' },
    { label: 'Chòm sao tri thức', href: '#skills-education', id: 'skills-education' },
    { label: 'Nguyệt quế CLB', href: '#projects', id: 'projects' },
    { label: 'Thành tích', href: '#honors', id: 'honors' },
    { label: 'Liên hệ', href: '#contact', id: 'contact' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    if (href === '#' || href === '#hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const target = document.querySelector(href);
    if (target) {
      const headerOffset = 76;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0B132B]/90 backdrop-blur-md border-b border-[#E0E1DD]/10 py-3 shadow-lg shadow-[#0B132B]/50'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Zone 1: Single text element wordmark */}
          <button
            onClick={() => handleLinkClick('#hero')}
            className="flex items-center gap-2 group text-[#E0E1DD] hover:text-[#F4D068] transition-colors cursor-pointer text-left"
          >
            <div className="w-8 h-8 rounded-full bg-[#1C2541] border border-[#F4D068]/30 flex items-center justify-center text-[#F4D068] shadow-[0_0_10px_rgba(244,208,104,0.25)] group-hover:shadow-[0_0_15px_rgba(244,208,104,0.5)] transition-all">
              <Moon className="w-4 h-4 fill-[#F4D068]/40" />
            </div>
            <span className="font-cinzel text-lg sm:text-xl font-bold tracking-wider text-white group-hover:text-[#F4D068] transition-colors">
              Minh Nguyệt
            </span>
          </button>

          {/* Zone 2: 4-6 clean text navigation links with active state indicator */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#E0E1DD]/80">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className={`relative py-1 transition-colors whitespace-nowrap group ${
                    isActive ? 'text-[#F4D068] font-semibold' : 'text-[#E0E1DD]/80 hover:text-[#F4D068]'
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0 left-0 h-[1.5px] bg-[#F4D068] transition-all duration-300 ${
                      isActive ? 'w-full shadow-[0_0_8px_#F4D068]' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenCVModal}
              className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-[#0B132B] bg-[#F4D068] rounded-lg moon-glow-btn hover:bg-[#FFE082] transition-colors whitespace-nowrap cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Xem & Tải CV</span>
            </button>
            <button
              onClick={() => handleLinkClick('#contact')}
              className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-[#E0E1DD] bg-[#1C2541]/80 hover:bg-[#1C2541] border border-[#E0E1DD]/20 rounded-lg hover:border-[#F4D068]/40 transition-colors whitespace-nowrap cursor-pointer"
            >
              <Send className="w-3.5 h-3.5 text-[#F4D068]" />
              <span>Liên hệ</span>
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenCVModal}
              className="px-3 py-1.5 text-xs font-semibold text-[#0B132B] bg-[#F4D068] rounded-md cursor-pointer"
            >
              CV
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#E0E1DD] hover:text-[#F4D068] focus:outline-none cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-lunar border-b border-[#E0E1DD]/10 px-6 py-5 mt-2 space-y-3 animate-fade-in">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className={`block text-sm py-1.5 transition-colors ${
                  isActive ? 'text-[#F4D068] font-semibold' : 'text-[#E0E1DD]/90 hover:text-[#F4D068]'
                }`}
              >
                {link.label}
              </a>
            );
          })}
          <div className="pt-3 border-t border-[#E0E1DD]/10 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCVModal();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-semibold text-[#0B132B] bg-[#F4D068] rounded-lg cursor-pointer"
            >
              <FileText className="w-4 h-4" />
              <span>Xem & Tải CV (PDF)</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

