import { NextResponse } from 'next/server';

interface Candidate {
  id: string;
  name: string;
  role: string;
  flag: string;
  avatar: string;
  tags: string[];
  hourlyRate?: string;
  experience: string;
  location: string;
}

const candidates: Candidate[] = [
  {
    id: '1',
    name: 'Abhishek Gupta',
    role: '마케팅 · 2y+',
    flag: 'https://flagcdn.com/w40/in.png',
    avatar: 'https://randomuser.me/api/portraits/women/33.jpg',
    tags: ['마케팅 콘텐츠 제작', '인스타그램 관리', '트위터 관리', '블로그 글 작성'],
    hourlyRate: '월 100만원',
    experience: '2년+',
    location: '인도',
  },
  {
    id: '2',
    name: 'Abhishek Gupta',
    role: '디자인 · 3y+',
    flag: 'https://flagcdn.com/w40/cn.png',
    avatar: 'https://randomuser.me/api/portraits/women/28.jpg',
    tags: ['마케팅 콘텐츠 제작', '인스타그램 관리', '트위터 관리', '블로그 글 작성'],
    hourlyRate: '월 120만원',
    experience: '3년+',
    location: '중국',
  },
  {
    id: '3',
    name: 'Miguel Rodriguez',
    role: '개발 · 4y+',
    flag: 'https://flagcdn.com/w40/mx.png',
    avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
    tags: ['마케팅 콘텐츠 제작', '인스타그램 관리', '트위터 관리', '블로그 글 작성'],
    hourlyRate: '월 150만원',
    experience: '4년+',
    location: '멕시코',
  },
];

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = searchParams.get('limit');
    const role = searchParams.get('role');

    let filteredCandidates = candidates;

    // Filter by role if provided
    if (role) {
      filteredCandidates = candidates.filter((candidate) => candidate.role.toLowerCase().includes(role.toLowerCase()));
    }

    // Apply limit if provided
    if (limit) {
      const limitNum = parseInt(limit, 10);
      filteredCandidates = filteredCandidates.slice(0, limitNum);
    }

    return NextResponse.json({
      success: true,
      data: filteredCandidates,
      total: filteredCandidates.length,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error('Error fetching candidates:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Internal server error',
        timestamp: new Date().toISOString(),
      },
      { status: 500 },
    );
  }
}

// Optional: Add POST endpoint for creating new candidates
export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Basic validation
    if (!body.name || !body.role) {
      return NextResponse.json(
        {
          success: false,
          error: 'Name and role are required',
          timestamp: new Date().toISOString(),
        },
        { status: 400 },
      );
    }

    const newCandidate: Candidate = {
      id: Date.now().toString(),
      name: body.name,
      role: body.role,
      flag: body.flag || 'https://flagcdn.com/w40/unknown.png',
      avatar: body.avatar || 'https://randomuser.me/api/portraits/lego/1.jpg',
      tags: body.tags || [],
      hourlyRate: body.hourlyRate,
      experience: body.experience || '1년+',
      location: body.location || 'Unknown',
    };

    candidates.push(newCandidate);

    return NextResponse.json(
      {
        success: true,
        data: newCandidate,
        message: 'Candidate created successfully',
        timestamp: new Date().toISOString(),
      },
      { status: 201 },
    );
  } catch (error) {
    console.error('Error creating candidate:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Invalid request body',
        timestamp: new Date().toISOString(),
      },
      { status: 400 },
    );
  }
}
