import React from 'react';
import { Sparkles, Award, FileCheck2, CheckCircle2, Trophy, BookmarkCheck } from 'lucide-react';
import { CERTIFICATIONS } from '../data/portfolioData';

export const HonorsSection: React.FC = () => {
  return (
    <section id="honors" className="py-24 relative overflow-hidden bg-[#0B132B]/80 scroll-mt-16 sm:scroll-mt-20">
      {/* Background ambient radial light */}
      <div 
        className="absolute bottom-0 left-1/3 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(58,80,107,0.18) 0%, rgba(11,19,43,0) 70%)'
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#F4D068] uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Minh chứng năng lực chuẩn quốc tế</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Thành Tích & Bằng Khen Rạng Rỡ
          </h2>
          <p className="text-sm sm:text-base text-[#E0E1DD]/70 max-w-2xl mx-auto text-balance">
            Các chứng chỉ quốc tế và thành quả định lượng khẳng định tính kỷ luật, khả năng tự học và sự cam kết đối với sự nghiệp kinh tế quốc tế.
          </p>
        </div>

        {/* Certifications Showcase Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Card 1: MOS 2025 Spotlight (Dominant Card) */}
          <div className="lg:col-span-7 glass-lunar rounded-2xl p-8 border border-[#F4D068]/30 relative overflow-hidden flex flex-col justify-between shadow-xl">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#F4D068]/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              {/* Header */}
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-[#1C2541] text-[#F4D068] border border-[#F4D068]/30">
                    <Trophy className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-[#F4D068] font-bold">
                      Chứng chỉ Quốc tế · Năm 2025
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      Microsoft Office Specialist (MOS)
                    </h3>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs text-[#E0E1DD]/70 block">Tổ chức cấp</span>
                  <span className="text-xs font-medium text-white">Certiport / Microsoft</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#E0E1DD]/80 mb-6 leading-relaxed">
                Minh chứng cho khả năng ứng dụng công nghệ tin học văn phòng ở đẳng cấp chuyên gia, thành thạo lập bảng tính kinh tế, xử lý văn bản quy chuẩn và thuyết trình học thuật.
              </p>

              {/* Three MOS Score Pillars with Tabular Figures */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                
                {/* Word: 1000/1000 */}
                <div className="p-4 rounded-xl bg-gradient-to-b from-[#1C2541] to-[#1C2541]/50 border border-[#F4D068]/40 relative group">
                  <div className="flex items-center justify-between text-xs text-[#F4D068] mb-1 font-semibold">
                    <span>MS Word</span>
                    <span className="text-[10px] bg-[#F4D068]/20 px-1.5 py-0.5 rounded">Tuyệt đối</span>
                  </div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-white font-cinzel tabular-nums">
                    1000<span className="text-sm font-normal text-[#E0E1DD]/60">/1000</span>
                  </div>
                  <p className="text-[11px] text-[#E0E1DD]/70 mt-1">
                    Chuẩn hóa tài liệu, hợp đồng & kỷ yếu học thuật.
                  </p>
                </div>

                {/* Excel: 940/1000 */}
                <div className="p-4 rounded-xl bg-gradient-to-b from-[#1C2541] to-[#1C2541]/50 border border-[#E0E1DD]/15 group">
                  <div className="flex items-center justify-between text-xs text-[#E0E1DD] mb-1 font-semibold">
                    <span>MS Excel</span>
                    <span className="text-[10px] bg-[#3A506B]/50 px-1.5 py-0.5 rounded text-[#E0E1DD]">Nâng cao</span>
                  </div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-white font-cinzel tabular-nums">
                    940<span className="text-sm font-normal text-[#E0E1DD]/60">/1000</span>
                  </div>
                  <p className="text-[11px] text-[#E0E1DD]/70 mt-1">
                    Xử lý ma trận dữ liệu, phân tích chỉ số kinh tế.
                  </p>
                </div>

                {/* PowerPoint: 960/1000 */}
                <div className="p-4 rounded-xl bg-gradient-to-b from-[#1C2541] to-[#1C2541]/50 border border-[#E0E1DD]/15 group">
                  <div className="flex items-center justify-between text-xs text-[#E0E1DD] mb-1 font-semibold">
                    <span>PowerPoint</span>
                    <span className="text-[10px] bg-[#3A506B]/50 px-1.5 py-0.5 rounded text-[#E0E1DD]">Chuyên nghiệp</span>
                  </div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-white font-cinzel tabular-nums">
                    960<span className="text-sm font-normal text-[#E0E1DD]/60">/1000</span>
                  </div>
                  <p className="text-[11px] text-[#E0E1DD]/70 mt-1">
                    Thiết kế bài báo cáo khoa học & thuyết trình trực quan.
                  </p>
                </div>

              </div>
            </div>

            {/* Bottom Proof Note */}
            <div className="pt-4 border-t border-[#E0E1DD]/10 flex items-center justify-between text-xs text-[#E0E1DD]/70">
              <span className="flex items-center gap-1.5 text-[#F4D068]">
                <BookmarkCheck className="w-4 h-4" />
                <span>Đã xác thực chứng chỉ quốc tế</span>
              </span>
              <span>Năm cấp: 2025</span>
            </div>

          </div>

          {/* Card 2: IELTS & Academic Research Honors */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* IELTS Card */}
            <div className="glass-lunar rounded-2xl p-7 border border-[#E0E1DD]/15 flex-1 flex flex-col justify-between relative overflow-hidden">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-[#1C2541] text-[#F4D068] border border-[#F4D068]/20">
                    <FileCheck2 className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-[#F4D068] font-bold">
                      Chứng chỉ Ngoại ngữ · Năm 2024
                    </span>
                    <h3 className="text-xl font-bold text-white">
                      IELTS Academic
                    </h3>
                  </div>
                </div>
                <span className="text-xs text-[#E0E1DD]/60">IDP / British Council</span>
              </div>

              <div className="p-4 rounded-xl bg-[#1C2541]/70 border border-[#F4D068]/20 flex items-center justify-between mb-4">
                <div>
                  <span className="text-xs text-[#E0E1DD]/70 block">Overall Band Score</span>
                  <span className="text-3xl font-extrabold text-[#F4D068] font-cinzel tabular-nums">
                    6.5
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-xs text-[#F4D068] font-semibold block">Trình độ Vững chắc</span>
                  <span className="text-[11px] text-[#E0E1DD]/70">Nghiên cứu tài liệu quốc tế</span>
                </div>
              </div>

              <p className="text-xs text-[#E0E1DD]/80 leading-relaxed mb-4">
                Ứng dụng vào phân tích tài liệu học thuật chuyên sâu về thương mại thế giới, viết báo cáo nghiên cứu và tham gia thảo luận hội thảo quốc tế.
              </p>

              <div className="pt-3 border-t border-[#E0E1DD]/10 flex items-center justify-between text-xs text-[#E0E1DD]/60">
                <span>Academic Module</span>
                <span>Giá trị quốc tế</span>
              </div>
            </div>

            {/* Extracurricular Clubs Honors Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-[#1C2541]/90 to-[#263255]/70 border border-[#F4D068]/20">
              <h4 className="text-xs uppercase tracking-wider text-[#F4D068] font-semibold mb-2 flex items-center gap-2">
                <Award className="w-4 h-4" />
                <span>Hoạt động CLB Học thuật FTU</span>
              </h4>
              <p className="text-xs text-[#E0E1DD]/85 leading-relaxed">
                Thành viên tích cực <strong className="text-white">CLB Nghiên cứu Khoa học (YRC)</strong> — Ban Nhân sự và <strong className="text-white">CLB Kinh tế Toàn cầu (GEC)</strong> — Ban Tổ chức tại Trường Đại học Ngoại thương từ năm 2025 đến nay.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
