export interface Project {
  id: string;
  title: string;
  category: 'research' | 'club' | 'project';
  categoryLabel: string;
  period: string;
  role: string;
  organization: string;
  description: string;
  highlights: string[];
  metrics?: string;
  image: string;
  tags: string[];
  fullDetails?: {
    overview: string;
    responsibilities: string[];
    outcomes: string[];
    skillsApplied: string[];
  };
}

export interface SkillCategory {
  title: string;
  iconName: string;
  description: string;
  skills: {
    name: string;
    level: string;
    tag?: string;
    note?: string;
  }[];
}

export const PERSONAL_INFO = {
  name: 'Nguyễn Thị Minh Nguyệt',
  title: 'Sinh viên năm 2 ngành Kinh tế quốc tế',
  university: 'Trường Đại học Ngoại thương (FTU)',
  universityEn: 'Foreign Trade University',
  faculty: 'Kinh tế quốc tế',
  cohort: 'K64 (2025 - 2029)',
  location: 'Đống Đa, Hà Nội',
  email: 'mikialice2k7@gmail.com',
  phone: '0971385608',
  meaningOfName: 'Vầng trăng sáng',
  heroTagline: 'Vầng trăng sáng giữa dòng chảy kinh tế toàn cầu — Kết hợp tư duy phân tích sắc bén với khát vọng chinh phục thị trường quốc tế.',
  aboutParagraphs: [
    'Tôi là Nguyễn Thị Minh Nguyệt, sinh viên năm 2 ngành Kinh tế quốc tế, luôn khao khát khám phá dòng chảy của nền kinh tế toàn cầu và thị trường tài chính. Tôi có khả năng phân tích dữ liệu, nghiên cứu các mô hình thương mại quốc tế và sử dụng tốt tiếng Anh chuyên ngành để giải quyết các bài tập nghiên cứu. Thế mạnh lớn nhất của tôi là tư duy logic, khả năng tự học nhanh và sự nhạy bén trước các xu hướng biến động của thị trường toàn cầu. Mục tiêu của tôi là tích lũy nền tảng kiến thức vững chắc, hướng tới trở thành một chuyên viên phân tích kinh tế hoặc chuyên gia tư vấn chiến lược trong các doanh nghiệp đa quốc gia.',
    'Về phong cách làm việc, tôi đặt giá trị chủ động, kỷ luật và chính xác lên hàng đầu. Trong mọi dự án hay bài tập nhóm, tôi luôn duy trì tinh thần trách nhiệm cao, thích làm việc với các con số cụ thể và luôn tìm kiếm những giải pháp tối ưu, thực tế cho các bài toán kinh tế.'
  ],
  coreValues: [
    {
      title: 'Chủ động & Thích ứng',
      description: 'Luôn tiên phong tiếp cận tri thức mới, nhanh nhạy nắm bắt xu hướng dịch chuyển kinh tế và tự tin trước thách thức.'
    },
    {
      title: 'Kỷ luật & Chính xác',
      description: 'Làm việc chuẩn mực dựa trên dữ liệu định lượng, tỉ mỉ trong từng phân tích và cam kết chất lượng kết quả đầu ra.'
    },
    {
      title: 'Tầm nhìn Quốc tế',
      description: 'Tư duy liên kết toàn cầu, vận dụng tiếng Anh chuyên ngành để nắm bắt sâu sắc các hiệp định và dòng chảy thương mại.'
    }
  ]
};

export const CERTIFICATIONS = [
  {
    id: 'mos',
    title: 'Tin học văn phòng quốc tế Microsoft Office Specialist (MOS)',
    issuer: 'Certiport & Microsoft',
    year: '2025',
    highlight: 'Điểm số xuất sắc',
    scores: [
      { subject: 'Microsoft Word', score: '1000/1000', note: 'Điểm tuyệt đối' },
      { subject: 'Microsoft Excel', score: '940/1000', note: 'Phân tích dữ liệu nâng cao' },
      { subject: 'Microsoft PowerPoint', score: '960/1000', note: 'Thiết kế báo cáo học thuật' }
    ],
    description: 'Thành thạo toàn diện các công cụ xử lý văn bản, lập mô hình bảng tính phân tích tài chính và thiết kế bài thuyết trình chuyên nghiệp.'
  },
  {
    id: 'ielts',
    title: 'Chứng chỉ Tiếng Anh Quốc Tế IELTS Academic',
    issuer: 'IDP / British Council',
    year: '2024',
    overall: '6.5',
    scores: [
      { subject: 'Overall Band', score: '6.5', note: 'Trình độ Trung cấp vững chắc' },
      { subject: 'Ứng dụng', score: 'Academic', note: 'Nghiên cứu tài liệu kinh tế chuyên sâu' }
    ],
    description: 'Khả năng đọc hiểu tài liệu học thuật kinh tế quốc tế, viết báo cáo nghiên cứu và trao đổi chuyên ngành bằng tiếng Anh lưu loát.'
  }
];

export const SKILL_GROUPS: SkillCategory[] = [
  {
    title: 'Kỹ năng Mềm & Tư duy',
    iconName: 'Users',
    description: 'Nền tảng giúp tối ưu hóa hiệu quả làm việc nhóm và giải quyết vấn đề phức tạp',
    skills: [
      { name: 'Giao tiếp & Làm việc nhóm hiệu quả', level: 'Thành thạo', tag: 'Teamwork' },
      { name: 'Quản lý thời gian & Sắp xếp công việc khoa học', level: 'Chuyên nghiệp', tag: 'Productivity' },
      { name: 'Tư duy sáng tạo, bắt trend thị trường nhanh nhạy', level: 'Tốt', tag: 'Creative Mindset' },
      { name: 'Chủ động tự học & Thích nghi linh hoạt', level: 'Rất tốt', tag: 'Adaptability' }
    ]
  },
  {
    title: 'Kỹ năng Chuyên môn & Công cụ',
    iconName: 'Laptop',
    description: 'Khai thác công nghệ và phương tiện trực quan để biểu đạt bài toán kinh tế',
    skills: [
      { name: 'Kỹ năng thuyết trình & Báo cáo học thuật cơ bản', level: 'Vững chắc', tag: 'Presentation' },
      { name: 'Canva & Thiết kế ấn phẩm truyền thông', level: 'Cơ bản - Khá', tag: 'Design' },
      { name: 'CapCut & Biên tập video ngắn', level: 'Cơ bản', tag: 'Video Editing' },
      { name: 'MOS: Word (1000), Excel (940), PowerPoint (960)', level: 'Chuyên gia', tag: 'Data & Office' }
    ]
  },
  {
    title: 'Trình độ Ngoại ngữ',
    iconName: 'Globe',
    description: 'Chìa khóa mở rộng tri thức và hội nhập chuỗi giá trị toàn cầu',
    skills: [
      { name: 'Tiếng Anh: Trung cấp (IELTS 6.5)', level: 'Intermediate', note: 'Đọc hiểu báo cáo WTO/World Bank, giao tiếp học thuật' },
      { name: 'Tiếng Trung: Sơ cấp', level: 'Elementary', note: 'Giao tiếp thường nhật, tiếp cận thị trường Đông Á' }
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'yrc-club',
    title: 'CLB Nghiên cứu Khoa học (YRC) — Ban Nhân sự',
    category: 'club',
    categoryLabel: 'Hoạt động Câu lạc bộ',
    period: '2025 - Nay',
    role: 'Thành viên Ban Nhân sự',
    organization: 'Trường Đại học Ngoại thương (FTU)',
    description: 'Tham gia xây dựng và phát triển các hoạt động trong CLB, gắn kết thành viên, hỗ trợ tổ chức sự kiện, workshop học thuật và xử lý thông tin.',
    highlights: [
      'Tham gia xây dựng và phát triển các hoạt động nghiên cứu khoa học trong CLB',
      'Hỗ trợ tổ chức sự kiện, workshop học thuật',
      'Tìm kiếm, tổng hợp và xử lý thông tin phục vụ cho các dự án nghiên cứu'
    ],
    metrics: 'Ban Nhân sự YRC',
    image: '/src/assets/images/cert_academic_1791219192273.jpg',
    tags: ['YRC FTU', 'Ban Nhân sự', 'Workshop Học thuật', 'Quản lý Dữ liệu'],
    fullDetails: {
      overview: 'Tại CLB Nghiên cứu Khoa học (YRC), phụ trách các công tác nhân sự, kết nối thành viên và phối hợp điều phối các chương trình, workshop học thuật.',
      responsibilities: [
        'Tham gia xây dựng và phát triển các hoạt động nghiên cứu khoa học trong CLB',
        'Hỗ trợ tổ chức sự kiện, workshop học thuật của CLB',
        'Tìm kiếm, tổng hợp và xử lý thông tin phục vụ cho các dự án nghiên cứu'
      ],
      outcomes: [
        'Rèn luyện kỹ năng quản lý nhân sự, giao tiếp và gắn kết đội ngũ',
        'Phát triển khả năng điều phối và tổ chức sự kiện học thuật chỉn chu'
      ],
      skillsApplied: ['Quản lý Thời gian', 'Giao tiếp & Làm việc nhóm', 'Gắn kết Nhân sự', 'Tổ chức Workshop']
    }
  },
  {
    id: 'gec-club',
    title: 'CLB Kinh tế Toàn cầu (GEC) — Ban Tổ chức',
    category: 'club',
    categoryLabel: 'Hoạt động Câu lạc bộ',
    period: '2025 - Nay',
    role: 'Thành viên Ban Tổ chức',
    organization: 'Trường Đại học Ngoại thương (FTU)',
    description: 'Trực tiếp tham gia công tác tổ chức sự kiện, workshop của CLB kết nối sinh viên và diễn giả, đồng thời nghiên cứu các xu hướng kinh tế trong và ngoài nước.',
    highlights: [
      'Tham gia các hoạt động học thuật liên quan đến kinh tế và kinh doanh',
      'Nghiên cứu, tìm hiểu các xu hướng kinh tế trong và ngoài nước',
      'Hỗ trợ tổ chức sự kiện, workshop của CLB'
    ],
    metrics: 'Ban Tổ chức GEC',
    image: '/src/assets/images/project_global_macro_1791219146459.jpg',
    tags: ['GEC FTU', 'Ban Tổ chức', 'Xu hướng Kinh tế', 'Tổ chức Sự kiện'],
    fullDetails: {
      overview: 'Tại CLB Kinh tế Toàn cầu (GEC), đảm nhiệm vai trò thành viên Ban Tổ chức, điều phối các hoạt động sự kiện, talkshow và workshop kinh tế quốc tế.',
      responsibilities: [
        'Tham gia các hoạt động học thuật liên quan đến kinh tế và kinh doanh',
        'Nghiên cứu, tìm hiểu các xu hướng kinh tế trong và ngoài nước',
        'Hỗ trợ tổ chức sự kiện, workshop của CLB'
      ],
      outcomes: [
        'Thành thạo quy trình vận hành và tổ chức sự kiện thực tế',
        'Nhạy bén trước các xu hướng kinh tế mới và nâng cao năng lực xử lý tình huống'
      ],
      skillsApplied: ['Tổ chức Sự kiện', 'Bắt trend Nhanh', 'Làm việc nhóm', 'Canva & CapCut']
    }
  }
];

export const EDUCATION_HISTORY = [
  {
    institution: 'Trường Đại học Ngoại thương (FTU)',
    degree: 'Cử nhân Kinh tế Quốc tế',
    period: '2025 - 2029',
    status: 'Sinh viên năm 2',
    description: 'Chương trình đào tạo chuyên sâu về thương mại quốc tế, kinh tế đối ngoại, tài chính vi mô - vĩ mô, và đàm phán thương mại toàn cầu.',
    achievements: [
      'Điểm số học phần kinh tế đạt loại Giỏi',
      'Thành viên tích cực 2 CLB Học thuật hàng đầu: YRC & GEC',
      'Chứng chỉ MOS Word 1000/1000 tuyệt đối, Excel 940, PowerPoint 960'
    ]
  }
];
