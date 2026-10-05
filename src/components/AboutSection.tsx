import React from 'react';
import { Sparkles, Target, Compass, CheckCircle2, TrendingUp, ShieldCheck } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden scroll-mt-16 sm:scroll-mt-20">
      {/* Background soft ambient radial light */}
      <div 
        className="absolute top-1/2 -left-48 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(58,80,107,0.2) 0%, rgba(11,19,43,0) 70%)'
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#F4D068] uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Về bản thân tôi</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Hành Trình Dưới Ánh Trăng Tri Thức
          </h2>
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Narrative Card: Complete Bio */}
          <div className="lg:col-span-7 glass-lunar p-8 sm:p-10 rounded-2xl flex flex-col justify-between relative overflow-hidden border border-[#E0E1DD]/10">
            {/* Top decorative glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#F4D068]/5 rounded-full blur-2xl pointer-events-none" />

            <div className="space-y-6 text-[#E0E1DD]/90 leading-relaxed text-base sm:text-lg font-normal">
              
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-wider text-[#F4D068] font-semibold">
                  Định vị & Khát vọng
                </span>
                <p className="text-[#E0E1DD]">
                  {PERSONAL_INFO.aboutParagraphs[0]}
                </p>
              </div>

              <div className="h-[1px] bg-gradient-to-r from-transparent via-[#E0E1DD]/15 to-transparent my-4" />

              <div className="space-y-2">
                <span className="text-xs uppercase tracking-wider text-[#F4D068] font-semibold">
                  Phong cách làm việc & Kỷ luật
                </span>
                <p className="text-[#E0E1DD]">
                  {PERSONAL_INFO.aboutParagraphs[1]}
                </p>
              </div>

            </div>

            {/* Bottom Signature / Highlight Metrics */}
            <div className="mt-8 pt-6 border-t border-[#E0E1DD]/10 grid grid-cols-2 sm:grid-cols-3 gap-4 text-left">
              <div>
                <span className="block text-2xl font-bold font-cinzel text-[#F4D068] tabular-nums">
                  K64
                </span>
                <span className="text-xs text-[#E0E1DD]/70">Đại học Ngoại thương</span>
              </div>
              <div>
                <span className="block text-2xl font-bold font-cinzel text-[#F4D068] tabular-nums">
                  1000<span className="text-sm font-normal text-[#E0E1DD]">/1000</span>
                </span>
                <span className="text-xs text-[#E0E1DD]/70">MOS Word Tuyệt đối</span>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span className="block text-2xl font-bold font-cinzel text-[#F4D068] tabular-nums">
                  6.5
                </span>
                <span className="text-xs text-[#E0E1DD]/70">IELTS Academic</span>
              </div>
            </div>

          </div>

          {/* Right Column: 3 Pillars of Professional Persona */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            
            {/* Pillar 1 */}
            <div className="glass-lunar p-6 rounded-2xl glass-lunar-hover border border-[#E0E1DD]/10">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#1C2541] border border-[#F4D068]/30 text-[#F4D068] shrink-0">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white mb-1.5 flex items-center gap-2">
                    <span>Chủ động & Thích ứng nhanh</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-[#E0E1DD]/75 leading-relaxed">
                    Luôn tiên phong nắm bắt các xu hướng thị trường toàn cầu, nhạy bén trước biến động và không ngừng cập nhật phương pháp phân tích mới.
                  </p>
                </div>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="glass-lunar p-6 rounded-2xl glass-lunar-hover border border-[#E0E1DD]/10">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#1C2541] border border-[#F4D068]/30 text-[#F4D068] shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white mb-1.5 flex items-center gap-2">
                    <span>Kỷ luật & Con số chính xác</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-[#E0E1DD]/75 leading-relaxed">
                    Tôn trọng sự thật khách quan từ dữ liệu, làm việc với tính cẩn trọng cao độ và tối ưu hóa từng bài toán kinh tế cụ thể.
                  </p>
                </div>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="glass-lunar p-6 rounded-2xl glass-lunar-hover border border-[#E0E1DD]/10">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#1C2541] border border-[#F4D068]/30 text-[#F4D068] shrink-0">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white mb-1.5 flex items-center gap-2">
                    <span>Tầm nhìn Tư vấn Chiến lược</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-[#E0E1DD]/75 leading-relaxed">
                    Mục tiêu trở thành chuyên viên phân tích kinh tế và tư vấn chiến lược trong các tập đoàn đa quốc gia và tổ chức tài chính.
                  </p>
                </div>
              </div>
            </div>

            {/* Career Objective Summary Banner */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-[#1C2541]/90 via-[#3A506B]/40 to-[#1C2541]/90 border border-[#F4D068]/20 flex items-center gap-3.5">
              <Target className="w-5 h-5 text-[#F4D068] shrink-0" />
              <p className="text-xs text-[#E0E1DD]/90">
                <strong className="text-white font-medium">Mục tiêu hiện tại:</strong> Hoàn thiện nền tảng định lượng, nghiên cứu thương mại quốc tế và đóng góp vào các dự án kinh tế thực tiễn.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
