import HeroSection from '@/components/organisms/HeroSection';
import Footer from '@/components/organisms/Footer';

interface Candidate {
  name: string;
  role: string;
  flag: string;
  avatar: string;
  tags: string[];
}

const candidates: Candidate[] = [
  {
    name: 'Abhishek Gupta',
    role: '마케팅 · 2y+',
    flag: 'https://flagcdn.com/w40/in.png',
    avatar: 'https://randomuser.me/api/portraits/women/33.jpg',
    tags: ['마케팅 콘텐츠 제작', '인스타그램 관리', '트위터 관리', '블로그 글 작성'],
  },
  {
    name: 'Abhishek Gupta',
    role: '디자인 · 3y+',
    flag: 'https://flagcdn.com/w40/cn.png',
    avatar: 'https://randomuser.me/api/portraits/women/28.jpg',
    tags: ['마케팅 콘텐츠 제작', '인스타그램 관리', '트위터 관리', '블로그 글 작성'],
  },
  {
    name: 'Miguel Rodriguez',
    role: '개발 · 4y+',
    flag: 'https://flagcdn.com/w40/mx.png',
    avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
    tags: ['마케팅 콘텐츠 제작', '인스타그램 관리', '트위터 관리', '블로그 글 작성'],
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection candidates={candidates} />
      <Footer />
    </div>
  );
}
