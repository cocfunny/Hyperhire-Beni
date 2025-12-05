'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Candidate {
  name: string;
  role: string;
  flag: string;
  avatar: string;
  tags: string[];
}

interface HeroSectionProps {
  candidates: Candidate[];
}

const HeroSection: React.FC<HeroSectionProps> = ({ candidates: initialCandidates }) => {
  const [candidates, setCandidates] = useState<Candidate[]>(initialCandidates);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        const res = await fetch('/api/candidates');
        if (res.ok) {
          const response = await res.json();
          if (response.success) {
            setCandidates(response.data || []);
          }
        }
      } catch (error) {
        console.error('Error fetching candidates:', error);
      }
    };

    fetchCandidates();
  }, []);

  const moveCarousel = (direction: number) => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + direction;
      if (newIndex < 0) return candidates.length - 1;
      if (newIndex >= candidates.length) return 0;
      return newIndex;
    });
  };

  return (
    <section className="hero-section">
      <div className="hero-bg-pattern" />

      <div className="container">
        <nav>
          <div className="logo">
            <i className="fa-solid fa-cube" style={{ color: 'white' }}></i> hyperhire
          </div>
          <div className="menu">
            <div className="menu-item">채용</div>
            <div className="menu-item">해외 개발자 활용 서비스</div>
          </div>
          <a href="#" className="btn-contact">
            문의하기
          </a>
          <i className="fa-solid fa-bars mobile-menu-icon" />
        </nav>

        <div className="hero-grid">
          <div className="hero-text">
            <div className="tooltip-bubble fade-in-up" style={{ animationDelay: '1.6s' }}>
              풀타임, 파트타임
            </div>
            <h1 className="fade-in-up delay-500">
              최고의 실력을 가진
              <br />
              외국인 인재를 찾고 계신가요?
            </h1>
            <p className="fade-in-up delay-700">법률 및 인사관리 부담없이 1주일 이내에 원격으로 채용해보세요.</p>

            <Link href="#" className="desktop-link fade-in-up delay-700">
              개발자가 필요하신가요?
            </Link>

            <div className="stats-row fade-in-up delay-700">
              <div className="stat-item">
                <h4>평균 월 120만원</h4>
                <p>임금을 해당 국가를 기준으로 계산합니다.</p>
              </div>
              <div className="stat-item">
                <h4>최대 3회 인력교체</h4>
                <p>막상 채용해보니 맞지 않아도 걱정하지 마세요.</p>
              </div>
              <div className="stat-item">
                <h4>평균 3일, 최대 10일</h4>
                <p>급하게 사람이 필요한 경우에도 빠른 채용이 가능합니다.</p>
              </div>
            </div>
          </div>

          <div className="carousel-section fade-in-up delay-500">
            <div className="green-tooltip">
              <div className="dollar-sign">$</div>월 100만원
            </div>

            <div className="prev-arrow nav-arrow" onClick={() => moveCarousel(-1)}>
              {'<'}
            </div>

            <div className="card-carousel" id="cardCarousel">
              {candidates.map((person, index) => {
                let positionClass = '';
                if (index === currentIndex) {
                  positionClass = 'active';
                } else if (index === (currentIndex - 1 + candidates.length) % candidates.length) {
                  positionClass = 'prev';
                } else if (index === (currentIndex + 1) % candidates.length) {
                  positionClass = 'next';
                }

                return (
                  <div key={index} className={`card ${positionClass}`}>
                    <div className="card-header">
                      <Image
                        src={person.avatar}
                        alt={person.name}
                        className="avatar"
                        width={100}
                        height={100}
                        unoptimized
                      />
                      <Image src={person.flag} alt="flag" className="flag" width={25} height={18} unoptimized />
                    </div>
                    <h3 className="no-copy">{person.name}</h3>
                    <h4>
                      {person.role.split(' · ')[0]} <span className="font-bold">· {person.role.split(' · ')[1]}</span>
                    </h4>
                    <div className="tags">
                      {person.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="tag no-copy">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="next-arrow nav-arrow" onClick={() => moveCarousel(1)}>
              {'>'}
            </div>
          </div>

          <div style={{ gridColumn: '1 / -1' }}>
            <div className="mobile-checklist fade-in-up delay-700 no-copy">
              <div className="check-item">
                <div className="check-box">
                  <i className="fa-solid fa-check"></i>
                </div>
                한국어 능력
              </div>
              <div className="check-item">
                <div className="check-box">
                  <i className="fa-solid fa-check"></i>
                </div>
                업무 수행 능력
              </div>
              <div className="check-item">
                <div className="check-box">
                  <i className="fa-solid fa-check"></i>
                </div>
                겸업 여부
              </div>
              <div className="check-item">
                <div className="check-box">
                  <i className="fa-solid fa-check"></i>
                </div>
                평판 조회
              </div>
            </div>
            <Link href="#" className="mobile-link fade-in-up delay-700 no-copy">
              개발자가 필요하신가요?
            </Link>
          </div>
        </div>

        <div className="bottom-slider-container fade-in-up delay-700" style={{ animationDelay: '1s' }}>
          <div className="slider-track">
            <div className="slide-item">
              <div className="slide-icon">
                <i className="fa-solid fa-code"></i>
              </div>
              해외 마케팅
            </div>
            <div className="slide-item">
              <div className="slide-icon">
                <i className="fa-regular fa-image"></i>
              </div>
              퍼블리셔
            </div>
            <div className="slide-item">
              <div className="slide-icon">
                <i className="fa-solid fa-box-open"></i>
              </div>
              캐드원(제도사)
            </div>
            <div className="slide-item">
              <div className="slide-icon">
                <i className="fa-regular fa-star"></i>
              </div>
              해외 세일즈
            </div>
            <div className="slide-item">
              <div className="slide-icon">
                <i className="fa-solid fa-phone"></i>
              </div>
              해외 CS
            </div>
            <div className="slide-item">
              <div className="slide-icon">
                <i className="fa-solid fa-code"></i>
              </div>
              해외 마케팅
            </div>
            <div className="slide-item">
              <div className="slide-icon">
                <i className="fa-regular fa-image"></i>
              </div>
              퍼블리셔
            </div>
            <div className="slide-item">
              <div className="slide-icon">
                <i className="fa-solid fa-box-open"></i>
              </div>
              캐드원(제도사)
            </div>
            <div className="slide-item">
              <div className="slide-icon">
                <i className="fa-regular fa-star"></i>
              </div>
              해외 세일즈
            </div>
            <div className="slide-item">
              <div className="slide-icon">
                <i className="fa-solid fa-phone"></i>
              </div>
              해외 CS
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
