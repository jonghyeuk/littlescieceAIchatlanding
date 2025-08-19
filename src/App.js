import React, { useState } from 'react';
import { 
  ArrowRight, 
  Beaker, 
  Star, 
  BookOpen, 
  Users,
  Search,
  FileText,
  MessageCircle,
  Clock,
  Award,
  CheckCircle
} from 'lucide-react';

// 🔥 외부 PricingPage 컴포넌트 import
import PricingPage from './components/PricingPage';

const App = () => {
  const [currentPage, setCurrentPage] = useState('landing'); // 'landing' 또는 'pricing'

  // 기존 랜딩 페이지 (과학연구설계 AI)
  const LandingPage = () => {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        {/* Navigation */}
        <nav className="bg-white/80 backdrop-blur-md shadow-sm border-b border-slate-200/50 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center shadow-lg">
                    <Beaker className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="ml-3">
                  <h1 className="text-xl font-bold text-slate-800">
                    과학연구설계 AI
                  </h1>
                  <p className="text-xs text-slate-500">고등학생 연구활동 전문 도우미</p>
                </div>
              </div>
              <div className="flex items-center space-x-6">
                <button 
                  onClick={() => document.getElementById('features-section')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-slate-600 hover:text-slate-900 px-4 py-2 rounded-lg text-sm font-medium transition-all hover:bg-slate-100"
                >
                  기능 둘러보기
                </button>
                <button 
                  onClick={() => document.getElementById('screenshot-section')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-slate-600 hover:text-slate-900 px-4 py-2 rounded-lg text-sm font-medium transition-all hover:bg-slate-100"
                >
                  실제스크린샷
                </button>
                <button 
                  onClick={() => document.getElementById('how-it-works-section')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-slate-600 hover:text-slate-900 px-4 py-2 rounded-lg text-sm font-medium transition-all hover:bg-slate-100"
                >
                  사용방법
                </button>
                <a href="https://littlescienceaichat.web.app" target="_blank" rel="noopener noreferrer">
                  <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2.5 rounded-xl text-sm font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                    시작하기
                  </button>
                </a>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-indigo-600/5"></div>
          <div className="max-w-7xl mx-auto text-center relative">
            <div className="mb-8">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 border border-blue-200/50 shadow-sm">
                <Users className="w-4 h-4 mr-2" />
                ISEF·전국과학전람회·R&E 등 20,000+ 수상작 DB · AI 멘토링
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-slate-800">
                고등학생 연구활동
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                이제 AI와 함께 쉽게!
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              <span className="font-semibold text-blue-700">연구주제 정하기</span>부터 
              <span className="font-semibold text-blue-700">실험설계</span>, 
              <span className="font-semibold text-blue-700">보고서 작성</span>까지<br/>
              과학 연구의 모든 과정을 AI가 단계별로 도와드립니다
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <a href="https://littlescienceaichat.web.app" target="_blank" rel="noopener noreferrer">
                <button className="group bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-10 py-5 rounded-2xl text-lg font-bold hover:from-blue-700 hover:to-indigo-700 transition-all shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-1 flex items-center">
                  6분 무료체험 시작하기
                  <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </button>
              </a>
              <a href="https://littlescienceaichat.web.app/" target="_blank" rel="noopener noreferrer">
                <button className="group bg-gradient-to-r from-emerald-500 to-green-500 text-white px-10 py-5 rounded-2xl text-lg font-bold hover:from-emerald-600 hover:to-green-600 transition-all shadow-2xl hover:shadow-emerald-500/25 transform hover:-translate-y-1 flex items-center">
                  시작하기
                  <BookOpen className="ml-3 w-6 h-6 group-hover:scale-110 transition-transform" />
                </button>
              </a>
              <button 
                onClick={() => setCurrentPage('pricing')}
                className="group bg-gradient-to-r from-orange-500 to-red-500 text-white px-10 py-5 rounded-2xl text-lg font-bold hover:from-orange-600 hover:to-red-600 transition-all shadow-2xl hover:shadow-orange-500/25 transform hover:-translate-y-1 flex items-center"
              >
                이용권 구매
                <Star className="ml-3 w-6 h-6 group-hover:rotate-12 transition-transform" />
              </button>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg">
                <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-slate-800">2,000+</div>
                <div className="text-sm text-slate-600">고등학생들이 이미 사용중</div>
              </div>
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg">
                <Clock className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-slate-800">70%</div>
                <div className="text-sm text-slate-600">연구시간 단축 효과</div>
              </div>
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg">
                <Award className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-slate-800">20,000+</div>
                <div className="text-sm text-slate-600 leading-relaxed">
                  <div className="font-semibold mb-1">수상작 데이터베이스</div>
                  <div className="text-xs text-slate-500">
                    • ISEF 국제과학경진대회<br/>
                    • 전국과학전람회<br/>
                    • 청소년과학탐구대회<br/>
                    • R&E 연구활동<br/>
                    • 기타 국내외 과학대회
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features-section" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-slate-800">
                  고등학생 연구활동의
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  모든 단계를 한번에!
                </span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                연구가 처음이어도 괜찮아요. AI가 각 단계별로 친절하게 설명하고 도와드립니다.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                {/* Feature 1 */}
                <div className="flex items-start space-x-4 p-6 rounded-2xl bg-blue-50 border border-blue-100">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Search className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">1단계: 연구주제 찾기</h3>
                    <p className="text-slate-600">
                      관심분야만 말해주세요! AI가 ISEF, 전국과학전람회, R&E, 청소년과학탐구대회 등 
                      20,000개 수상작에서 비슷한 연구들을 찾아서 좋은 주제를 추천해드려요.
                    </p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="flex items-start space-x-4 p-6 rounded-2xl bg-green-50 border border-green-100">
                  <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Beaker className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">2단계: 실험 설계하기</h3>
                    <p className="text-slate-600">
                      "어떤 실험을 해야 할지 모르겠어요" 걱정마세요! 
                      주제만 정하면 AI가 구체적인 실험 방법을 단계별로 알려드려요.
                    </p>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="flex items-start space-x-4 p-6 rounded-2xl bg-purple-50 border border-purple-100">
                  <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">3단계: 보고서 자동작성</h3>
                    <p className="text-slate-600">
                      "연구보고서 어떻게 써야 하죠?" 실험 결과만 입력하면 
                      AI가 완벽한 보고서를 자동으로 작성해드려요.
                    </p>
                  </div>
                </div>

                {/* Feature 4 */}
                <div className="flex items-start space-x-4 p-6 rounded-2xl bg-orange-50 border border-orange-100">
                  <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">4단계: 궁금한 건 바로 질문</h3>
                    <p className="text-slate-600">
                      "이 부분이 이해가 안돼요!" 언제든지 AI 선생님께 질문하세요. 
                      24시간 친절한 답변으로 도와드려요.
                    </p>
                  </div>
                </div>
              </div>

              {/* Screenshot Area */}
              <div id="screenshot-section" className="lg:pl-8">
                <div className="bg-slate-100 rounded-3xl p-8 shadow-2xl">
                  <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">실제 사용 화면</h3>
                  
                  {/* Main Screenshot */}
                  <div className="bg-white rounded-2xl p-4 shadow-lg">
                    <div className="text-sm text-slate-500 mb-2">메인 화면</div>
                    <div className="w-full h-64 bg-gradient-to-br from-blue-100 to-blue-200 border-2 border-dashed border-blue-300 rounded-lg flex items-center justify-center">
                      <div className="text-center text-slate-600">
                        <Beaker className="w-16 h-16 mx-auto mb-4 text-blue-500" />
                        <p className="text-sm">스크린샷 영역</p>
                        <p className="text-xs text-slate-500">권장 사이즈: 600×400px</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 나머지 섹션들도 동일하게... */}
        {/* 여기에 기존 How It Works, CTA, Footer 섹션들 추가 */}
        
      </div>
    );
  };

  // 현재 페이지에 따라 컴포넌트 렌더링
  return (
    <div className="App">
      {currentPage === 'landing' ? (
        <LandingPage />
      ) : (
        <PricingPage onBackToLanding={() => setCurrentPage('landing')} />
      )}
    </div>
  );
};

// 🔥 export는 파일에서 딱 한 번만!
export default App;
