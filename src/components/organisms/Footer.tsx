import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-700 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4 text-gray-800">
              <i className="fa-solid fa-cube text-blue-500 mr-2"></i>
              <span className="font-bold text-lg">hyperhire</span>
            </div>
            <p className="mb-4">우리는 국가의 장벽을 넘어 최고의 인재를 매칭해드립니다.</p>
            <div className="font-semibold">
              <div>010-0000-0000</div>
              <div>aaaaa@naver.com</div>
            </div>
          </div>

          <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <div className="flex items-center mb-3">
                <div className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center mr-3">
                  <i className="fa-solid fa-code text-gray-600"></i>
                </div>
              </div>
              <h5 className="font-semibold mb-2">해외 개발자 원격 채용</h5>
              <p className="text-sm text-gray-600 flex items-center cursor-pointer">
                바로가기 <i className="fa-solid fa-arrow-right ml-1"></i>
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <div className="flex items-center mb-3">
                <div className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center mr-3">
                  <i className="fa-solid fa-user text-gray-600"></i>
                </div>
              </div>
              <h5 className="font-semibold mb-2">외국인 원격 채용 (비개발)</h5>
              <p className="text-sm text-gray-600 flex items-center cursor-pointer">
                바로가기 <i className="fa-solid fa-arrow-right ml-1"></i>
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <div className="flex items-center mb-3">
                <div className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center mr-3 text-sm font-bold">
                  KOR
                </div>
              </div>
              <h5 className="font-semibold mb-2">한국어 가능 외국인 채용</h5>
              <p className="text-sm text-gray-600 flex items-center cursor-pointer">
                바로가기 <i className="fa-solid fa-arrow-right ml-1"></i>
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <div className="flex items-center mb-3">
                <div className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center mr-3">
                  <i className="fa-solid fa-gear text-gray-600"></i>
                </div>
              </div>
              <h5 className="font-semibold mb-2">해외 개발자 활용 서비스</h5>
              <p className="text-sm text-gray-600 flex items-center cursor-pointer">
                바로가기 <i className="fa-solid fa-arrow-right ml-1"></i>
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-sm text-gray-600 mb-8">
          <div>
            <div className="font-semibold mb-2 text-gray-800">상호명</div>
            <div>하이퍼하이어</div>
            <div className="font-semibold">Hyperhire India Private Limited</div>
          </div>
          <div>
            <div className="font-semibold mb-2 text-gray-800">대표 CEO</div>
            <div>김주현</div>
            <div className="font-semibold">Juhyun Kim</div>
          </div>
          <div>
            <div className="font-semibold mb-2 text-gray-800">사업자등록번호 CIN</div>
            <div>427-86-01187</div>
            <div className="font-semibold">U74110DL2016PTC290812</div>
          </div>
          <div>
            <div className="font-semibold mb-2 text-gray-800">주소 ADDRESS</div>
            <div>서울특별시 강남대로 479, 지하 1층 238호</div>
            <div className="font-semibold">
              D-138, Street number 11, Jagjeet Nagar, North East Delhi, New Delhi, 110053 India
            </div>
          </div>
        </div>

        <div className="font-bold text-left text-sm text-gray-500 pt-4 border-gray-200">© 2023 Hyperhire</div>
      </div>
    </footer>
  );
};

export default Footer;
