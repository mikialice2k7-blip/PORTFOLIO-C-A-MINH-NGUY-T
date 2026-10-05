import React, { useState } from 'react';
import { 
  GraduationCap, 
  Sparkles, 
  Users, 
  Palette, 
  Globe, 
  BookOpen, 
  CheckCircle, 
  Layers,
  Award,
  Calendar,
  ExternalLink
} from 'lucide-react';
import { SKILL_GROUPS, EDUCATION_HISTORY } from '../data/portfolioData';

export const SkillsEducationSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'soft' | 'tools' | 'languages'>('all');

  return (
    <section id="skills-education" className="py-24 relative overflow-hidden bg-[#0B132B]/60 scroll-mt-16 sm:scroll-mt-20">
      {/* Background celestial constellation pattern lines */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: 'radial-gradient(#F4D068 0.75px, transparent 0.75px), radial-gradient(#E0E1DD 0.5px, #0B132B 0.5px)',
          backgroundSize: '40px 40px',
          backgroundPosition: '0 0, 20px 20px'
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#F4D068] uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Học vấn & Năng lực</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Các Chòm Sao Tri Thức
          </h2>
          <p className="text-sm sm:text-base text-[#E0E1DD]/70 max-w-2xl mx-auto text-balance">
            Bản đồ học thuật và hệ thống kỹ năng đa chiều được rèn luyện từ giảng đường Đại học Ngoại thương và các câu lạc bộ học thuật danh tiếng.
          </p>
        </div>

        {/* Part 1: Education Block (Học vấn) */}
        <div className="mb-14">
          <div className="liquid-glass p-6 sm:p-8 rounded-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#F4D068]/5 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Institution Badge */}
              <div className="lg:col-span-4 flex items-start gap-4">
                <div className="p-3.5 rounded-xl bg-[#1C2541] border border-[#F4D068]/40 text-[#F4D068] shadow-lg shadow-[#F4D068]/10 shrink-0">
                  <GraduationCap className="w-8 h-8" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#F4D068] font-semibold">
                    Học vấn Chính quy
                  </span>
                  <h3 className="text-xl font-bold text-white mt-1">
                    Trường Đại học Ngoại thương
                  </h3>
                  <p className="text-xs text-[#E0E1DD]/60">Foreign Trade University (FTU Hà Nội)</p>
                  <div className="flex items-center gap-2 text-xs text-[#E0E1DD]/70 mt-2 font-medium">
                    <Calendar className="w-3.5 h-3.5 text-[#F4D068]" />
                    <span>2025 - 2029 (Khóa 64 - K64)</span>
                  </div>
                </div>
              </div>

              {/* Middle Academic Specialization */}
              <div className="lg:col-span-5 space-y-2 border-t lg:border-t-0 lg:border-l border-[#E0E1DD]/10 pt-4 lg:pt-0 lg:pl-6">
                <span className="text-xs uppercase tracking-wider text-[#E0E1DD]/50 font-medium">
                  Chuyên ngành đào tạo
                </span>
                <h4 className="text-lg font-semibold text-[#F4D068]">
                  Ngành Kinh tế Quốc tế (International Economics)
                </h4>
                <p className="text-xs sm:text-sm text-[#E0E1DD]/80 leading-relaxed">
                  Trọng tâm: Thương mại quốc tế, kinh tế vĩ mô toàn cầu, chuỗi cung ứng, phân tích chính sách tiền tệ và chiến lược kinh doanh đa quốc gia.
                </p>
              </div>

              {/* Right Highlights */}
              <div className="lg:col-span-3 bg-[#1C2541]/70 p-4 rounded-xl border border-[#E0E1DD]/10 space-y-2">
                <span className="text-xs text-[#F4D068] font-semibold flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5" />
                  Điểm tựa học thuật
                </span>
                <ul className="text-xs text-[#E0E1DD]/80 space-y-1.5">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F4D068]" />
                    <span>Tư duy phân tích số liệu định lượng</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F4D068]" />
                    <span>Tiếng Anh kinh tế chuyên ngành</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F4D068]" />
                    <span>Học bổng & thành tích ngoại khóa</span>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </div>

        {/* Filter Tabs for Skills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'all'
                ? 'bg-[#F4D068] text-[#0B132B] font-semibold shadow-md'
                : 'text-[#E0E1DD]/80 hover:text-white bg-[#1C2541]/60 border border-[#E0E1DD]/10'
            }`}
          >
            Tất cả năng lực
          </button>
          <button
            onClick={() => setActiveTab('soft')}
            className={`px-4 py-2 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'soft'
                ? 'bg-[#F4D068] text-[#0B132B] font-semibold shadow-md'
                : 'text-[#E0E1DD]/80 hover:text-white bg-[#1C2541]/60 border border-[#E0E1DD]/10'
            }`}
          >
            Kỹ năng mềm
          </button>
          <button
            onClick={() => setActiveTab('tools')}
            className={`px-4 py-2 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'tools'
                ? 'bg-[#F4D068] text-[#0B132B] font-semibold shadow-md'
                : 'text-[#E0E1DD]/80 hover:text-white bg-[#1C2541]/60 border border-[#E0E1DD]/10'
            }`}
          >
            Công cụ & Thuyết trình
          </button>
          <button
            onClick={() => setActiveTab('languages')}
            className={`px-4 py-2 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'languages'
                ? 'bg-[#F4D068] text-[#0B132B] font-semibold shadow-md'
                : 'text-[#E0E1DD]/80 hover:text-white bg-[#1C2541]/60 border border-[#E0E1DD]/10'
            }`}
          >
            Ngoại ngữ
          </button>
        </div>

        {/* Part 2: Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1: Soft Skills (Kỹ năng mềm) */}
          {(activeTab === 'all' || activeTab === 'soft') && (
            <div className="liquid-glass p-6 sm:p-7 rounded-2xl flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-[#1C2541] text-[#F4D068] border border-[#F4D068]/20">
                    <Users className="w-5 h-5" />
                  </div>
                  <span className="text-xs text-[#F4D068] font-medium tracking-wide uppercase">
                    Constellation 01
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  Kỹ năng Mềm & Tương tác
                </h3>
                <p className="text-xs text-[#E0E1DD]/70 mb-5">
                  Nền tảng gắn kết đội ngũ, tối ưu năng suất làm việc và giải quyết bài toán nhóm.
                </p>

                <div className="space-y-3.5">
                  <div className="p-3 rounded-xl bg-[#1C2541]/50 border border-[#E0E1DD]/5">
                    <div className="flex items-center justify-between text-xs font-semibold text-white mb-1">
                      <span>Giao tiếp & Làm việc nhóm</span>
                      <span className="text-[#F4D068]">Thành thạo</span>
                    </div>
                    <p className="text-[11px] text-[#E0E1DD]/70">Lắng nghe tích cực, điều phối thảo luận và giải quyết xung đột ý kiến.</p>
                  </div>

                  <div className="p-3 rounded-xl bg-[#1C2541]/50 border border-[#E0E1DD]/5">
                    <div className="flex items-center justify-between text-xs font-semibold text-white mb-1">
                      <span>Quản lý thời gian & Sắp xếp công việc</span>
                      <span className="text-[#F4D068]">Chuyên nghiệp</span>
                    </div>
                    <p className="text-[11px] text-[#E0E1DD]/70">Lập kế hoạch tiến độ rõ ràng, ưu tiên đầu việc và bảo đảm deadline.</p>
                  </div>

                  <div className="p-3 rounded-xl bg-[#1C2541]/50 border border-[#E0E1DD]/5">
                    <div className="flex items-center justify-between text-xs font-semibold text-white mb-1">
                      <span>Tư duy sáng tạo, bắt trend nhanh</span>
                      <span className="text-[#F4D068]">Nhạy bén</span>
                    </div>
                    <p className="text-[11px] text-[#E0E1DD]/70">Nắm bắt xu hướng xã hội & kinh tế mới, ứng dụng linh hoạt vào đề tài.</p>
                  </div>

                  <div className="p-3 rounded-xl bg-[#1C2541]/50 border border-[#E0E1DD]/5">
                    <div className="flex items-center justify-between text-xs font-semibold text-white mb-1">
                      <span>Chủ động học hỏi, thích nghi nhanh</span>
                      <span className="text-[#F4D068]">Chủ động cao</span>
                    </div>
                    <p className="text-[11px] text-[#E0E1DD]/70">Tinh thần tự nghiên cứu tài liệu mới, sẵn sàng đón nhận thách thức.</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Card 2: Presentation & Tools (Thuyết trình & Công cụ) */}
          {(activeTab === 'all' || activeTab === 'tools') && (
            <div className="liquid-glass p-6 sm:p-7 rounded-2xl flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-[#1C2541] text-[#F4D068] border border-[#F4D068]/20">
                    <Palette className="w-5 h-5" />
                  </div>
                  <span className="text-xs text-[#F4D068] font-medium tracking-wide uppercase">
                    Constellation 02
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  Công cụ & Thuyết trình
                </h3>
                <p className="text-xs text-[#E0E1DD]/70 mb-5">
                  Biến dữ liệu phức tạp thành ấn phẩm trực quan và bài thuyết trình lôi cuốn.
                </p>

                <div className="space-y-3.5">
                  <div className="p-3 rounded-xl bg-[#1C2541]/50 border border-[#E0E1DD]/5">
                    <div className="flex items-center justify-between text-xs font-semibold text-white mb-1">
                      <span>Kỹ năng thuyết trình cơ bản</span>
                      <span className="text-[#F4D068]">Vững vàng</span>
                    </div>
                    <p className="text-[11px] text-[#E0E1DD]/70">Trình bày báo cáo nghiên cứu mạch lạc, tự tin trước hội đồng.</p>
                  </div>

                  <div className="p-3 rounded-xl bg-[#1C2541]/50 border border-[#E0E1DD]/5">
                    <div className="flex items-center justify-between text-xs font-semibold text-white mb-1">
                      <span>Canva</span>
                      <span className="text-[#F4D068]">Thiết kế Cơ bản - Khá</span>
                    </div>
                    <p className="text-[11px] text-[#E0E1DD]/70">Thiết kế slide báo cáo học thuật, infographic dữ liệu và poster sự kiện.</p>
                  </div>

                  <div className="p-3 rounded-xl bg-[#1C2541]/50 border border-[#E0E1DD]/5">
                    <div className="flex items-center justify-between text-xs font-semibold text-white mb-1">
                      <span>CapCut</span>
                      <span className="text-[#F4D068]">Biên tập Video cơ bản</span>
                    </div>
                    <p className="text-[11px] text-[#E0E1DD]/70">Cắt ghép video ngắn, recap workshop và ấn phẩm truyền thông CLB.</p>
                  </div>

                  <div className="p-3 rounded-xl bg-[#1C2541]/50 border border-[#E0E1DD]/5">
                    <div className="flex items-center justify-between text-xs font-semibold text-white mb-1">
                      <span>Microsoft Office (MOS)</span>
                      <span className="text-[#F4D068]">Chuyên gia</span>
                    </div>
                    <p className="text-[11px] text-[#E0E1DD]/70">Word 1000, Excel 940, PowerPoint 960 — Xử lý số liệu & văn bản tối ưu.</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Card 3: Languages (Trình độ Ngoại ngữ) */}
          {(activeTab === 'all' || activeTab === 'languages') && (
            <div className="liquid-glass p-6 sm:p-7 rounded-2xl flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-[#1C2541] text-[#F4D068] border border-[#F4D068]/20">
                    <Globe className="w-5 h-5" />
                  </div>
                  <span className="text-xs text-[#F4D068] font-medium tracking-wide uppercase">
                    Constellation 03
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  Trình độ Ngoại ngữ
                </h3>
                <p className="text-xs text-[#E0E1DD]/70 mb-5">
                  Cầu nối hội nhập kinh tế toàn cầu, tiếp cận kho tàng tri thức thương mại.
                </p>

                <div className="space-y-4">
                  
                  {/* English Card */}
                  <div className="p-4 rounded-xl bg-gradient-to-br from-[#1C2541] to-[#3A506B]/40 border border-[#F4D068]/30">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-bold text-white">Tiếng Anh (English)</span>
                      <span className="text-xs font-semibold text-[#0B132B] bg-[#F4D068] px-2 py-0.5 rounded">
                        IELTS 6.5
                      </span>
                    </div>
                    <span className="text-xs text-[#F4D068] font-medium block mb-1">
                      Trình độ Trung cấp (Intermediate)
                    </span>
                    <p className="text-[11px] text-[#E0E1DD]/80 leading-relaxed">
                      Sử dụng tốt tiếng Anh chuyên ngành kinh tế để đọc hiểu tài liệu nghiên cứu quốc tế, soạn thảo bài tập và giao tiếp học thuật.
                    </p>
                  </div>

                  {/* Chinese Card */}
                  <div className="p-4 rounded-xl bg-[#1C2541]/50 border border-[#E0E1DD]/10">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-bold text-white">Tiếng Trung (Chinese)</span>
                      <span className="text-xs font-medium text-[#E0E1DD] bg-[#3A506B] px-2 py-0.5 rounded">
                        Sơ cấp
                      </span>
                    </div>
                    <span className="text-xs text-[#E0E1DD]/70 font-medium block mb-1">
                      Trình độ Sơ cấp (Elementary)
                    </span>
                    <p className="text-[11px] text-[#E0E1DD]/80 leading-relaxed">
                      Giao tiếp căn bản hàng ngày, đang tiếp tục trau dồi hướng tới giao thương và thương mại khu vực Đông Á.
                    </p>
                  </div>

                  {/* Language Vision Note */}
                  <div className="p-3 rounded-lg bg-[#0B132B]/60 border border-[#E0E1DD]/5 text-xs text-[#E0E1DD]/70">
                    <span className="text-[#F4D068] font-medium">Định hướng:</span> Tích hợp đa ngôn ngữ vào năng lực đàm phán hợp đồng kinh tế quốc tế.
                  </div>

                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
