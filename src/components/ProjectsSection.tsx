import React, { useState } from 'react';
import { Sparkles, ArrowUpRight, FolderGit2, X, Check, Users, Calendar } from 'lucide-react';
import { PROJECTS, Project } from '../data/portfolioData';

export const ProjectsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'yrc-club' | 'gec-club'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = activeFilter === 'all'
    ? PROJECTS
    : PROJECTS.filter((p) => p.id === activeFilter);

  return (
    <section id="projects" className="py-24 relative overflow-hidden scroll-mt-16 sm:scroll-mt-20">
      {/* Background ambient lighting */}
      <div 
        className="absolute top-1/3 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(244,208,104,0.06) 0%, rgba(11,19,43,0) 70%)'
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#F4D068] uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Hoạt động & Trải nghiệm thực tiễn</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Kho Tàng Nguyệt Quế — Hoạt Động Câu Lạc Bộ
          </h2>
          <p className="text-sm sm:text-base text-[#E0E1DD]/70 max-w-2xl mx-auto text-balance">
            Dấu ấn tham gia tại các câu lạc bộ học thuật danh tiếng thuộc Trường Đại học Ngoại thương (YRC & GEC), rèn luyện phương pháp luận, tính kỷ luật và kỹ năng làm việc nhóm.
          </p>
        </div>

        {/* Filter Category Segmented Controls */}
        <div className="flex items-center justify-center gap-2 mb-12">
          <div className="inline-flex p-1 rounded-xl bg-[#1C2541]/70 border border-[#E0E1DD]/10">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                activeFilter === 'all'
                  ? 'bg-[#F4D068] text-[#0B132B] font-semibold shadow-sm'
                  : 'text-[#E0E1DD]/70 hover:text-white'
              }`}
            >
              Tất cả hoạt động ({PROJECTS.length})
            </button>
            <button
              onClick={() => setActiveFilter('yrc-club')}
              className={`px-4 py-2 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                activeFilter === 'yrc-club'
                  ? 'bg-[#F4D068] text-[#0B132B] font-semibold shadow-sm'
                  : 'text-[#E0E1DD]/70 hover:text-white'
              }`}
            >
              CLB Nghiên cứu Khoa học (YRC)
            </button>
            <button
              onClick={() => setActiveFilter('gec-club')}
              className={`px-4 py-2 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                activeFilter === 'gec-club'
                  ? 'bg-[#F4D068] text-[#0B132B] font-semibold shadow-sm'
                  : 'text-[#E0E1DD]/70 hover:text-white'
              }`}
            >
              CLB Kinh tế Toàn cầu (GEC)
            </button>
          </div>
        </div>

        {/* Glassmorphism Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group liquid-glass rounded-2xl overflow-hidden cursor-pointer flex flex-col justify-between"
            >
              {/* Image banner with measured scrim */}
              <div className="relative h-56 sm:h-64 overflow-hidden bg-[#1C2541]">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95"
                />
                
                {/* Measured contrast scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C2541] via-[#1C2541]/40 to-transparent" />

                {/* Top Category and Period metadata (clean unboxed) */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-xs">
                  <span className="text-[#F4D068] font-semibold drop-shadow-md">
                    {project.categoryLabel}
                  </span>
                  <div className="flex items-center gap-1.5 text-white/90 drop-shadow-md font-medium">
                    <Calendar className="w-3.5 h-3.5 text-[#F4D068]" />
                    <span>{project.period}</span>
                  </div>
                </div>

                {/* Bottom Title on Image */}
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-xs text-[#E0E1DD]/70 block mb-1">
                    {project.organization}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#F4D068] transition-colors leading-snug text-balance">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                
                {/* Role and description */}
                <div>
                  <div className="flex items-center gap-2 text-xs text-[#F4D068] font-medium mb-2">
                    <Users className="w-3.5 h-3.5" />
                    <span>Vai trò: {project.role}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#E0E1DD]/80 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Bullet Highlights */}
                <div className="space-y-1.5 pt-2 border-t border-[#E0E1DD]/10">
                  {project.highlights.slice(0, 2).map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-[#E0E1DD]/75">
                      <span className="text-[#F4D068] mt-0.5">✦</span>
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Card Footer: Unboxed tags and Click affordance */}
                <div className="pt-3 border-t border-[#E0E1DD]/10 flex items-center justify-between">
                  <div className="flex flex-wrap items-center gap-2 text-[11px] text-[#E0E1DD]/60">
                    {project.tags.slice(0, 3).map((tag, i) => (
                      <React.Fragment key={tag}>
                        <span>#{tag}</span>
                        {i < 2 && <span aria-hidden="true">·</span>}
                      </React.Fragment>
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#F4D068] group-hover:translate-x-0.5 transition-transform">
                    <span>Chi tiết</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Project Detail Lightbox Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B132B]/85 backdrop-blur-md animate-fade-in"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="glass-lunar max-w-2xl w-full max-h-[90vh] overflow-y-auto rounded-2xl border border-[#F4D068]/30 p-6 sm:p-8 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-[#1C2541] text-[#E0E1DD] hover:text-[#F4D068] border border-[#E0E1DD]/10 transition-colors cursor-pointer"
              aria-label="Đóng cửa sổ"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="space-y-2 mb-6 pr-8">
              <div className="flex items-center gap-2 text-xs text-[#F4D068] font-semibold uppercase tracking-wider">
                <span>{selectedProject.categoryLabel}</span>
                <span aria-hidden="true">·</span>
                <span>{selectedProject.period}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                {selectedProject.title}
              </h3>
              <p className="text-xs text-[#E0E1DD]/70">
                {selectedProject.organization} — <strong className="text-[#F4D068]">{selectedProject.role}</strong>
              </p>
            </div>

            {/* Project Image */}
            <div className="h-48 sm:h-56 rounded-xl overflow-hidden mb-6 bg-[#1C2541]">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Modal Body */}
            <div className="space-y-6 text-sm text-[#E0E1DD]/85">
              
              {/* Overview */}
              <div>
                <h4 className="text-xs uppercase tracking-wider text-[#F4D068] font-semibold mb-2">
                  Tổng quan nội dung
                </h4>
                <p className="leading-relaxed">
                  {selectedProject.fullDetails?.overview || selectedProject.description}
                </p>
              </div>

              {/* Responsibilities */}
              <div>
                <h4 className="text-xs uppercase tracking-wider text-[#F4D068] font-semibold mb-2">
                  Nhiệm vụ & Trách nhiệm chủ trì
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm">
                  {(selectedProject.fullDetails?.responsibilities || selectedProject.highlights).map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-[#F4D068] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Outcomes */}
              {selectedProject.fullDetails?.outcomes && (
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-[#F4D068] font-semibold mb-2">
                    Kết quả & Giá trị đạt được
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm">
                    {selectedProject.fullDetails.outcomes.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#F4D068] shrink-0 mt-2" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Skills applied */}
              {selectedProject.fullDetails?.skillsApplied && (
                <div className="pt-4 border-t border-[#E0E1DD]/10">
                  <span className="text-xs text-[#E0E1DD]/60 block mb-2 font-medium">
                    Kỹ năng vận dụng:
                  </span>
                  <div className="flex flex-wrap gap-2 text-xs text-[#F4D068]">
                    {selectedProject.fullDetails.skillsApplied.map((skill, idx) => (
                      <span key={idx} className="bg-[#1C2541] px-2.5 py-1 rounded-md border border-[#F4D068]/20">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}

            </div>

            {/* Modal Close Action */}
            <div className="mt-8 pt-4 border-t border-[#E0E1DD]/10 flex justify-end">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-5 py-2.5 text-xs font-semibold text-[#0B132B] bg-[#F4D068] rounded-xl hover:bg-[#FFE082] transition-colors cursor-pointer"
              >
                Đóng thông tin
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
