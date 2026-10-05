import React from 'react';
import { X, Printer, Download, Mail, Phone, MapPin, GraduationCap, Award, BookOpen, Check } from 'lucide-react';
import { PERSONAL_INFO, CERTIFICATIONS, EDUCATION_HISTORY } from '../data/portfolioData';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CVModal: React.FC<CVModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadText = () => {
    const cvContent = `
CURRICULUM VITAE - NGUYỄN THỊ MINH NGUYỆT
-----------------------------------------------------------
1. THÔNG TIN CÁ NHÂN & LIÊN HỆ
- Họ và tên: Nguyễn Thị Minh Nguyệt
- Định vị: Sinh viên năm 2 ngành Kinh tế quốc tế (Khóa 64 - K64)
- Trường: Trường Đại học Ngoại thương (FTU) (2025 - 2029)
- Email: mikialice2k7@gmail.com
- Số điện thoại: 0971385608
- Khu vực: Đống Đa, Hà Nội

2. GIỚI THIỆU BẢN THÂN
Tôi là Nguyễn Thị Minh Nguyệt, sinh viên năm 2 ngành Kinh tế quốc tế, luôn khao khát khám phá dòng chảy của nền kinh tế toàn cầu và thị trường tài chính. Tôi có khả năng phân tích dữ liệu, nghiên cứu các mô hình thương mại quốc tế và sử dụng tốt tiếng Anh chuyên ngành để giải quyết các bài tập nghiên cứu. Thế mạnh lớn nhất của tôi là tư duy logic, khả năng tự học nhanh và sự nhạy bén trước các xu hướng biến động của thị trường toàn cầu. Mục tiêu của tôi là tích lũy nền tảng kiến thức vững chắc, hướng tới trở thành một chuyên viên phân tích kinh tế hoặc chuyên gia tư vấn chiến lược trong các doanh nghiệp đa quốc gia.

Về phong cách làm việc, tôi đặt giá trị chủ động, kỷ luật và chính xác lên hàng đầu. Trong mọi dự án hay bài tập nhóm, tôi luôn duy trì tinh thần trách nhiệm cao, thích làm việc với các con số cụ thể và luôn tìm kiếm những giải pháp tối ưu, thực tế cho các bài toán kinh tế.

3. KỸ NĂNG
- Kỹ năng mềm:
  + Giao tiếp và làm việc nhóm tốt
  + Quản lý thời gian và sắp xếp công việc tốt
  + Tư duy sáng tạo, bắt trend nhanh
  + Chủ động học hỏi, thích nghi nhanh
- Kỹ năng chuyên môn & công cụ:
  + Kỹ năng thuyết trình cơ bản
  + Sử dụng cơ bản các công cụ thiết kế: Canva, CapCut
  + Tin học văn phòng MOS Chuyên sâu
- Trình độ ngoại ngữ:
  + Tiếng Anh: Trung cấp (IELTS 6.5)
  + Tiếng Trung: Sơ cấp

4. HỌC VẤN VÀ KINH NGHIỆM
- Trường Đại học Ngoại thương | 2025 - 2029
  + Ngành: Kinh tế quốc tế
- CLB NGHIÊN CỨU KHOA HỌC (YRC) | 2025 - nay (Thành viên Ban Nhân sự)
  + Tham gia xây dựng và phát triển các hoạt động trong CLB
  + Hỗ trợ tổ chức sự kiện, workshop học thuật
  + Tìm kiếm, tổng hợp và xử lý thông tin phục vụ cho các dự án nghiên cứu
- CLB KINH TẾ TOÀN CẦU (GEC) | 2025 - nay (Thành viên Ban Tổ chức)
  + Tham gia các hoạt động học thuật liên quan đến kinh tế và kinh doanh
  + Nghiên cứu, tìm hiểu các xu hướng kinh tế trong và ngoài nước
  + Hỗ trợ tổ chức sự kiện, workshop của CLB

5. THÀNH TÍCH VÀ MINH CHỨNG
- Tin học văn phòng MOS (2025):
  + Word: 1000/1000 (Điểm tuyệt đối)
  + Excel: 940/1000
  + PowerPoint: 960/1000
- IELTS (2024): 6.5 Overall
-----------------------------------------------------------
    `.trim();

    const blob = new Blob([cvContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'CV_Nguyen_Thi_Minh_Nguyet_FTU.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#0B132B]/90 backdrop-blur-lg overflow-y-auto animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="bg-white text-slate-900 rounded-2xl max-w-4xl w-full max-h-[94vh] flex flex-col shadow-2xl overflow-hidden relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Modal Top Bar (hidden in print) */}
        <div className="no-print bg-[#0B132B] text-white px-6 py-4 flex items-center justify-between border-b border-[#E0E1DD]/15 shrink-0">
          <div className="flex items-center gap-2">
            <span className="font-cinzel font-bold text-sm sm:text-base text-[#F4D068]">
              Curriculum Vitae Preview
            </span>
            <span className="text-xs text-[#E0E1DD]/60 hidden sm:inline">
              · Nguyễn Thị Minh Nguyệt
            </span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-[#0B132B] bg-[#F4D068] hover:bg-[#FFE082] rounded-lg transition-colors cursor-pointer"
              title="In hoặc Lưu PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>In / Lưu PDF</span>
            </button>

            <button
              onClick={handleDownloadText}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white bg-[#1C2541] hover:bg-[#3A506B] rounded-lg transition-colors cursor-pointer"
              title="Tải văn bản"
            >
              <Download className="w-3.5 h-3.5 text-[#F4D068]" />
              <span className="hidden sm:inline">Tải File</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-[#E0E1DD]/80 hover:text-white rounded-lg hover:bg-white/10 transition-colors ml-1 cursor-pointer"
              aria-label="Đóng CV"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Document Body */}
        <div className="overflow-y-auto p-6 sm:p-10 space-y-7 text-slate-800 leading-normal text-xs sm:text-sm font-sans bg-white print:p-0">
          
          {/* Section 1: Header / Personal Info */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-6 border-b-2 border-slate-900">
            <div className="space-y-2">
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 font-cinzel">
                NGUYỄN THỊ MINH NGUYỆT
              </h1>
              <p className="text-sm sm:text-base font-semibold text-amber-700">
                Sinh viên năm 2 ngành Kinh tế quốc tế (K64) — Trường Đại học Ngoại thương (FTU)
              </p>
              
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-slate-600 pt-1">
                <span className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-slate-700" />
                  <strong>Email:</strong> mikialice2k7@gmail.com
                </span>
                <span className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-slate-700" />
                  <strong>SĐT:</strong> 0971385608
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-slate-700" />
                  <strong>Địa chỉ:</strong> Đống Đa, Hà Nội
                </span>
              </div>
            </div>

            {/* Portrait avatar photo */}
            <div className="w-24 h-28 sm:w-28 sm:h-34 rounded-lg overflow-hidden border border-slate-300 shadow-sm shrink-0 self-center sm:self-auto bg-slate-100">
              <img
                src="/src/assets/images/nguyet_portrait_1791219174977.jpg"
                alt="Nguyễn Thị Minh Nguyệt"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          {/* Section 2: About Me */}
          <div className="space-y-2">
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-amber-600 rounded-sm" />
              2. GIỚI THIỆU BẢN THÂN
            </h2>
            <div className="text-slate-700 space-y-2 text-justify leading-relaxed">
              <p>
                {PERSONAL_INFO.aboutParagraphs[0]}
              </p>
              <p>
                {PERSONAL_INFO.aboutParagraphs[1]}
              </p>
            </div>
          </div>

          {/* Section 3: Skills */}
          <div className="space-y-3">
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-amber-600 rounded-sm" />
              3. KỸ NĂNG & NĂNG LỰC
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 space-y-1.5">
                <span className="font-bold text-slate-900 block">Kỹ năng mềm:</span>
                <ul className="list-disc list-inside text-slate-700 space-y-1">
                  <li>Giao tiếp và làm việc nhóm tốt</li>
                  <li>Quản lý thời gian và sắp xếp công việc tốt</li>
                  <li>Tư duy sáng tạo, bắt trend nhanh</li>
                  <li>Chủ động học hỏi, thích nghi nhanh</li>
                </ul>
              </div>

              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 space-y-1.5">
                <span className="font-bold text-slate-900 block">Kỹ năng chuyên môn & Công cụ:</span>
                <ul className="list-disc list-inside text-slate-700 space-y-1">
                  <li>Kỹ năng thuyết trình cơ bản</li>
                  <li>Sử dụng cơ bản các công cụ thiết kế: Canva, CapCut</li>
                  <li>Tin học văn phòng: Microsoft Office Specialist (MOS)</li>
                </ul>
                <div className="pt-2 border-t border-slate-200">
                  <span className="font-bold text-slate-900 block mb-0.5">Trình độ ngoại ngữ:</span>
                  <p className="text-slate-700">✦ <strong>Tiếng Anh:</strong> Trung cấp (IELTS 6.5)</p>
                  <p className="text-slate-700">✦ <strong>Tiếng Trung:</strong> Sơ cấp</p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 4: Education & Experience */}
          <div className="space-y-3">
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-amber-600 rounded-sm" />
              4. HỌC VẤN VÀ KINH NGHIỆM
            </h2>

            <div className="space-y-3 text-xs sm:text-sm">
              {/* University */}
              <div className="pb-2 border-b border-slate-100">
                <div className="flex justify-between items-baseline">
                  <h3 className="font-bold text-slate-900 text-sm">
                    Trường Đại học Ngoại thương (FTU)
                  </h3>
                  <span className="text-slate-500 font-medium text-xs">2025 - 2029</span>
                </div>
                <p className="text-slate-700 font-medium">Ngành: Kinh tế quốc tế (Sinh viên năm 2 — Khóa 64 / K64)</p>
              </div>

              {/* YRC */}
              <div className="pb-2 border-b border-slate-100">
                <div className="flex justify-between items-baseline">
                  <h3 className="font-bold text-slate-900 text-sm">
                    CLB NGHIÊN CỨU KHOA HỌC (YRC)
                  </h3>
                  <span className="text-slate-500 font-medium text-xs">2025 - Nay</span>
                </div>
                <p className="text-amber-800 font-medium text-xs mb-1">Thành viên Ban Nhân sự</p>
                <ul className="list-disc list-inside text-slate-700 text-xs space-y-0.5">
                  <li>Tham gia xây dựng và phát triển các hoạt động trong CLB</li>
                  <li>Hỗ trợ tổ chức sự kiện, workshop học thuật</li>
                  <li>Tìm kiếm, tổng hợp và xử lý thông tin phục vụ cho các dự án nghiên cứu</li>
                </ul>
              </div>

              {/* GEC */}
              <div>
                <div className="flex justify-between items-baseline">
                  <h3 className="font-bold text-slate-900 text-sm">
                    CLB KINH TẾ TOÀN CẦU (GEC)
                  </h3>
                  <span className="text-slate-500 font-medium text-xs">2025 - Nay</span>
                </div>
                <p className="text-amber-800 font-medium text-xs mb-1">Thành viên Ban Tổ chức</p>
                <ul className="list-disc list-inside text-slate-700 text-xs space-y-0.5">
                  <li>Tham gia các hoạt động học thuật liên quan đến kinh tế và kinh doanh</li>
                  <li>Nghiên cứu, tìm hiểu các xu hướng kinh tế trong và ngoài nước</li>
                  <li>Hỗ trợ tổ chức sự kiện, workshop của CLB</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section 5: Honors & Certifications */}
          <div className="space-y-3">
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-amber-600 rounded-sm" />
              5. THÀNH TÍCH VÀ MINH CHỨNG
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 bg-amber-50/60 rounded-lg border border-amber-200">
                <span className="font-bold text-amber-900 block mb-1">
                  ● Tin học văn phòng MOS (2025)
                </span>
                <ul className="space-y-1 text-slate-800">
                  <li className="flex justify-between">
                    <span>Microsoft Word:</span>
                    <strong className="text-amber-800 font-semibold">1000/1000 (Điểm tuyệt đối)</strong>
                  </li>
                  <li className="flex justify-between">
                    <span>Microsoft Excel:</span>
                    <strong className="text-slate-900 font-semibold">940/1000</strong>
                  </li>
                  <li className="flex justify-between">
                    <span>Microsoft PowerPoint:</span>
                    <strong className="text-slate-900 font-semibold">960/1000</strong>
                  </li>
                </ul>
              </div>

              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                <span className="font-bold text-slate-900 block mb-1">
                  ● Chứng chỉ Ngoại ngữ IELTS (2024)
                </span>
                <p className="text-slate-700">
                  Overall Band: <strong className="text-amber-800 text-sm">6.5</strong> (Academic Module)
                </p>
                <p className="text-[11px] text-slate-600 mt-1">
                  Sử dụng thành thạo tiếng Anh cho nghiên cứu thương mại quốc tế.
                </p>
              </div>
            </div>
          </div>

          {/* Footer note inside CV */}
          <div className="pt-4 border-t border-slate-200 text-center text-[11px] text-slate-500">
            Hồ sơ lý lịch được trích xuất từ Portfolio trực tuyến của Nguyễn Thị Minh Nguyệt · mikialice2k7@gmail.com
          </div>

        </div>

      </div>
    </div>
  );
};
