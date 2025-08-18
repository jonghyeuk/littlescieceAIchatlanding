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
        {/* 기존 랜딩페이지 코드 그대로... */}
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

        {/* 나머지 랜딩페이지 코드들... */}
        {/* Hero Section부터 Footer까지 기존 코드 그대로 유지 */}
        
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
            
            {/* 나머지 Hero Section 코드... */}
          </div>
        </section>

        {/* 나머지 모든 섹션들은 기존 코드 그대로 유지... */}
      </div>
    );
  };

  // 🔥 내장 PricingPage 제거하고 외부 컴포넌트 사용
  // 현재 페이지에 따라 컴포넌트 렌더링
  return (
    <div className="App">
      {currentPage === 'landing' ? (
        <LandingPage />
      ) : (
        // 🔥 외부 PricingPage 컴포넌트 사용 + 뒤로가기 함수 전달
        <PricingPage onBackToLanding={() => setCurrentPage('landing')} />
      )}
    </div>
  );
};

export default App;

export default App;
