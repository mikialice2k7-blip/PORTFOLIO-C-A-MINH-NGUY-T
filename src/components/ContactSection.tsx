import React, { useState } from 'react';
import { 
  Sparkles, 
  Mail, 
  Phone, 
  MapPin, 
  Copy, 
  Check, 
  Send, 
  FileText, 
  Download, 
  ExternalLink,
  Moon,
  ArrowUp
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactSectionProps {
  onOpenCVModal: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenCVModal }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleCopy = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2500);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setFormStatus('submitting');
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setFormStatus('idle'), 5000);
    }, 800);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#0B132B] scroll-mt-16 sm:scroll-mt-20">
      {/* Background ambient lighting */}
      <div 
        className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(244,208,104,0.05) 0%, rgba(28,37,65,0.3) 50%, transparent 75%)'
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#F4D068] uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Kết nối dưới ánh trăng</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Liên Hệ & Tải Hồ Sơ Năng Lực (CV)
          </h2>
          <p className="text-sm sm:text-base text-[#E0E1DD]/70 max-w-2xl mx-auto text-balance">
            Tôi luôn sẵn lòng đón nhận các cơ hội giao lưu học hỏi, hoạt động câu lạc bộ, và các vị trí thực tập tiềm năng.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-20">
          
          {/* Left Column: Direct Contact Details & CV Download */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Contact Info Cards */}
            <div className="glass-lunar p-6 sm:p-7 rounded-2xl border border-[#E0E1DD]/10 space-y-5">
              <h3 className="text-lg font-bold text-white mb-2">
                Thông tin cá nhân & Liên lạc
              </h3>

              {/* Email */}
              <div className="p-4 rounded-xl bg-[#1C2541]/70 border border-[#E0E1DD]/10 flex items-center justify-between group">
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="p-2.5 rounded-lg bg-[#0B132B] text-[#F4D068] border border-[#F4D068]/20 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="truncate">
                    <span className="text-[11px] text-[#E0E1DD]/60 block">Hộp thư điện tử</span>
                    <a 
                      href={`mailto:${PERSONAL_INFO.email}`} 
                      className="text-xs sm:text-sm font-semibold text-white hover:text-[#F4D068] transition-colors truncate block"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(PERSONAL_INFO.email, 'email')}
                  className="p-2 rounded-lg bg-[#1C2541] hover:bg-[#3A506B] text-[#E0E1DD] hover:text-[#F4D068] transition-colors shrink-0 ml-2 cursor-pointer"
                  title="Sao chép Email"
                  aria-label="Sao chép Email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone */}
              <div className="p-4 rounded-xl bg-[#1C2541]/70 border border-[#E0E1DD]/10 flex items-center justify-between group">
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="p-2.5 rounded-lg bg-[#0B132B] text-[#F4D068] border border-[#F4D068]/20 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-[#E0E1DD]/60 block">Số điện thoại</span>
                    <a 
                      href={`tel:${PERSONAL_INFO.phone}`} 
                      className="text-xs sm:text-sm font-semibold text-white hover:text-[#F4D068] transition-colors block tabular-nums"
                    >
                      {PERSONAL_INFO.phone}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(PERSONAL_INFO.phone, 'phone')}
                  className="p-2 rounded-lg bg-[#1C2541] hover:bg-[#3A506B] text-[#E0E1DD] hover:text-[#F4D068] transition-colors shrink-0 ml-2 cursor-pointer"
                  title="Sao chép Số điện thoại"
                  aria-label="Sao chép Số điện thoại"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location */}
              <div className="p-4 rounded-xl bg-[#1C2541]/70 border border-[#E0E1DD]/10 flex items-center gap-3.5">
                <div className="p-2.5 rounded-lg bg-[#0B132B] text-[#F4D068] border border-[#F4D068]/20 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] text-[#E0E1DD]/60 block">Khu vực sinh sống</span>
                  <p className="text-xs sm:text-sm font-semibold text-white">
                    {PERSONAL_INFO.location}
                  </p>
                </div>
              </div>

            </div>

            {/* CV Download / View Showcase Card */}
            <div className="glass-lunar p-6 sm:p-7 rounded-2xl border border-[#F4D068]/30 bg-gradient-to-br from-[#1C2541]/90 via-[#263255]/70 to-[#1C2541]/90 relative overflow-hidden shadow-xl">
              <div className="space-y-3">
                <span className="text-xs uppercase tracking-wider text-[#F4D068] font-bold">
                  Hồ sơ học thuật & Kỹ năng
                </span>
                <h4 className="text-lg font-bold text-white">
                  Curriculum Vitae (CV PDF)
                </h4>
                <p className="text-xs text-[#E0E1DD]/80 leading-relaxed">
                  Bản tóm tắt toàn diện quá trình đào tạo tại ĐH Ngoại thương, chứng chỉ MOS, IELTS và hoạt động nghiên cứu YRC & GEC.
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-3 pt-3">
                  <button
                    onClick={onOpenCVModal}
                    className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold text-[#0B132B] bg-[#F4D068] rounded-xl moon-glow-btn cursor-pointer whitespace-nowrap"
                  >
                    <FileText className="w-4 h-4" />
                    <span>Xem & In CV (PDF)</span>
                  </button>

                  <button
                    onClick={onOpenCVModal}
                    className="w-full sm:w-auto flex items-center justify-center gap-2 py-3 px-4 text-xs font-medium text-white bg-[#0B132B]/80 hover:bg-[#0B132B] border border-[#E0E1DD]/20 rounded-xl transition-colors cursor-pointer whitespace-nowrap"
                  >
                    <Download className="w-4 h-4 text-[#F4D068]" />
                    <span>Tải CV</span>
                  </button>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Send Message Form */}
          <div className="lg:col-span-7 glass-lunar p-8 sm:p-10 rounded-2xl border border-[#E0E1DD]/10">
            <h3 className="text-xl font-bold text-white mb-2">
              Gửi tin nhắn trực tiếp
            </h3>
            <p className="text-xs sm:text-sm text-[#E0E1DD]/70 mb-6">
              Bạn có thể để lại lời nhắn, câu hỏi hoặc lời mời hợp tác tại đây. Tôi sẽ phản hồi trong thời gian sớm nhất.
            </p>

            {formStatus === 'success' ? (
              <div className="p-6 rounded-xl bg-[#1C2541] border border-emerald-500/40 text-center space-y-3 animate-fade-in">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-white">Tin nhắn đã được gửi thành công!</h4>
                <p className="text-xs text-[#E0E1DD]/80">
                  Cảm ơn bạn đã liên hệ với Minh Nguyệt. Tôi sẽ kiểm tra hòm thư <strong className="text-[#F4D068]">mikialice2k7@gmail.com</strong> và hồi đáp sớm nhất.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-[#E0E1DD]/80 mb-1.5">
                      Họ và tên của bạn *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ví dụ: Nguyễn Văn A"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 text-xs sm:text-sm bg-[#1C2541]/70 border border-[#E0E1DD]/15 rounded-xl text-white placeholder-[#E0E1DD]/35 focus:outline-none focus:border-[#F4D068] focus:ring-1 focus:ring-[#F4D068] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#E0E1DD]/80 mb-1.5">
                      Email của bạn *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 text-xs sm:text-sm bg-[#1C2541]/70 border border-[#E0E1DD]/15 rounded-xl text-white placeholder-[#E0E1DD]/35 focus:outline-none focus:border-[#F4D068] focus:ring-1 focus:ring-[#F4D068] transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#E0E1DD]/80 mb-1.5">
                    Tiêu đề / Chủ đề trao đổi
                  </label>
                  <input
                    type="text"
                    placeholder="Ví dụ: Trao đổi về đề tài nghiên cứu kinh tế / Cơ hội thực tập"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-2.5 text-xs sm:text-sm bg-[#1C2541]/70 border border-[#E0E1DD]/15 rounded-xl text-white placeholder-[#E0E1DD]/35 focus:outline-none focus:border-[#F4D068] focus:ring-1 focus:ring-[#F4D068] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#E0E1DD]/80 mb-1.5">
                    Nội dung lời nhắn *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Hãy viết lời nhắn của bạn tại đây..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 text-xs sm:text-sm bg-[#1C2541]/70 border border-[#E0E1DD]/15 rounded-xl text-white placeholder-[#E0E1DD]/35 focus:outline-none focus:border-[#F4D068] focus:ring-1 focus:ring-[#F4D068] transition-all resize-none"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <span className="text-[11px] text-[#E0E1DD]/50">
                    * Thông tin được chuyển trực tiếp đến email của Minh Nguyệt
                  </span>

                  <button
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className="flex items-center gap-2 px-6 py-3 text-xs font-semibold text-[#0B132B] bg-[#F4D068] hover:bg-[#FFE082] rounded-xl moon-glow-btn transition-colors cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{formStatus === 'submitting' ? 'Đang gửi...' : 'Gửi tin nhắn'}</span>
                  </button>
                </div>
              </form>
            )}

          </div>

        </div>

        {/* Footer Boundary */}
        <div className="pt-8 border-t border-[#E0E1DD]/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#E0E1DD]/60">
          <div className="flex items-center gap-2">
            <Moon className="w-4 h-4 text-[#F4D068]" />
            <span className="font-cinzel font-semibold text-white">Minh Nguyệt</span>
            <span>· Sinh viên Kinh tế quốc tế · FTU Hà Nội</span>
          </div>

          <div className="flex items-center gap-4">
            <span>© 2026 Nguyễn Thị Minh Nguyệt. All rights reserved.</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-[#1C2541] hover:bg-[#3A506B] text-[#E0E1DD] hover:text-[#F4D068] transition-colors"
              title="Lên đầu trang"
              aria-label="Lên đầu trang"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
