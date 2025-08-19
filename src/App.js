import React, { useState } from 'react';
import { 
  ArrowRight, 
  Search, 
  Beaker, 
  FileText, 
  MessageCircle, 
  Star, 
  Clock, 
  Award, 
  BookOpen, 
  Users,
  CheckCircle,
  ArrowLeft,
  GraduationCap,
  Mail,
  CreditCard,
  AlertCircle,
  Loader
} from 'lucide-react';

const App = () => {
  const [currentPage, setCurrentPage] = useState('landing'); // 'landing' 또는 'pricing'

  // 랜딩 페이지 컴포넌트
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

        {/* How It Works Section */}
        <section id="how-it-works-section" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-slate-800">
                  이렇게 간단해요!
                </span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                복잡해 보이는 연구도 AI와 함께하면 이렇게 쉬워집니다
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Step 1 */}
              <div className="relative">
                <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-200/50 h-full text-center">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                      1
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                      <Search className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-4">관심분야 입력</h3>
                    <p className="text-slate-600 leading-relaxed">
                      "환경오염", "우주", "AI" 등<br/>
                      관심있는 분야만 입력하세요!<br/>
                      AI가 연구할 만한 주제들을<br/>
                      추천해드려요 📝
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative">
                <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-200/50 h-full text-center">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                      2
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                      <Beaker className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-4">실험방법 안내</h3>
                    <p className="text-slate-600 leading-relaxed">
                      주제를 선택하면<br/>
                      어떤 실험을 해야 할지<br/>
                      단계별로 친절하게<br/>
                      설명해드려요 🔬
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative">
                <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-200/50 h-full text-center">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                      3
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                      <FileText className="w-8 h-8 text-purple-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-4">보고서 완성</h3>
                    <p className="text-slate-600 leading-relaxed">
                      실험 결과만 입력하면<br/>
                      AI가 자동으로<br/>
                      멋진 연구보고서를<br/>
                      완성해드려요 📄
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-purple-600/90"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
              지금 바로 시작해보세요!
              <span className="block text-yellow-300 text-3xl md:text-4xl mt-4">
                6분이면 충분해요 ⏰
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-blue-100 mb-16 max-w-4xl mx-auto leading-relaxed">
              회원가입도 필요없어요! 바로 체험해보고 마음에 들면 계속 사용하세요.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <a href="https://littlescienceaichat.web.app" target="_blank" rel="noopener noreferrer">
                <button className="group bg-white text-blue-600 px-12 py-6 rounded-2xl text-xl font-bold hover:bg-blue-50 transition-all shadow-2xl hover:shadow-white/20 transform hover:-translate-y-1 flex items-center">
                  <Clock className="mr-4 w-7 h-7" />
                  6분 무료체험 시작
                  <span className="ml-3 text-sm bg-green-100 text-green-700 px-3 py-1 rounded-full">FREE</span>
                </button>
              </a>
              <button 
                onClick={() => document.getElementById('how-it-works-section')?.scrollIntoView({ behavior: 'smooth' })}
                className="group border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white px-12 py-6 rounded-2xl text-xl font-bold hover:bg-white/20 transition-all flex items-center"
              >
                사용방법
                <ArrowRight className="ml-4 w-7 h-7 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => setCurrentPage('pricing')}
                className="group bg-gradient-to-r from-orange-500 to-red-500 text-white px-12 py-6 rounded-2xl text-xl font-bold hover:from-orange-600 hover:to-red-600 transition-all shadow-2xl hover:shadow-orange-500/25 transform hover:-translate-y-1 flex items-center"
              >
                이용권구매
                <Star className="ml-4 w-7 h-7 group-hover:rotate-12 transition-transform" />
              </button>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-white mb-2">2,000+</div>
                <div className="text-blue-100 text-sm">고등학생 이용자</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-white mb-2">6분</div>
                <div className="text-blue-100 text-sm">무료 체험시간</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-white mb-2">4단계</div>
                <div className="text-blue-100 text-sm">간단한 연구과정</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-white mb-2">24시간</div>
                <div className="text-blue-100 text-sm">AI 도움 서비스</div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-slate-900 text-slate-300 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-12">
              <div className="col-span-2">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                    <Beaker className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">과학연구설계 AI</h3>
                    <p className="text-sm text-slate-400">고등학생 연구활동 전문 도우미</p>
                  </div>
                </div>
                <p className="text-slate-400 mb-6 leading-relaxed max-w-md">
                  연구가 처음인 고등학생들도 쉽게 따라할 수 있도록 
                  AI가 연구의 모든 과정을 단계별로 친절하게 도와드립니다.
                </p>
              </div>
              
              <div>
                <h4 className="font-bold text-white mb-6 text-lg">주요 기능</h4>
                <ul className="space-y-3">
                  <li><span className="text-slate-400 text-sm">연구주제 추천</span></li>
                  <li><span className="text-slate-400 text-sm">실험설계 가이드</span></li>
                  <li><span className="text-slate-400 text-sm">보고서 자동작성</span></li>
                  <li><span className="text-slate-400 text-sm">AI 질문답변</span></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-white mb-6 text-lg">고객지원</h4>
                <ul className="space-y-3">
                  <li><a href="/help.html" className="hover:text-white transition-colors text-sm text-slate-400">사용방법 안내</a></li>
                  <li><a href="/faq.html" className="hover:text-white transition-colors text-sm text-slate-400">자주묻는질문</a></li>
                  <li><a href="/contact.html" className="hover:text-white transition-colors text-sm text-slate-400">문의하기</a></li>
                  <li><a href="/contact.html" className="hover:text-white transition-colors text-sm text-slate-400">피드백 보내기</a></li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-slate-400 mb-4 md:mb-0">
                © 2025 과학연구설계 AI. 모든 권리 보유.
              </p>
              <div className="flex items-center text-sm text-slate-400 space-x-6">
                <a href="/privacy.html" className="hover:text-white transition-colors">개인정보처리방침</a>
                <a href="/terms.html" className="hover:text-white transition-colors">이용약관</a>
                <a href="/parents.html" className="hover:text-white transition-colors">학부모 가이드</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  };

  // 🔥 첫 번째 구매페이지 그대로 통합 (모든 기능과 UI 유지)
  const PricingPage = () => {
    const [selectedLicense, setSelectedLicense] = useState(null);
    const [selectedPrice, setSelectedPrice] = useState(0);
    const [buyerEmail, setBuyerEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState({ type: '', message: '' });

    const licenses = [
      {
        id: '7일 이용권',
        title: '7일 이용권',
        price: 7900,
        originalPrice: 11900,
        duration: '7일',
        icon: Clock,
        description: '일주일간 과학논문 주제 탐색 (기능 동일)',
        color: 'blue',
        popular: false
      },
      {
        id: '15일 이용권', 
        title: '15일 베이직',
        price: 14900,
        originalPrice: 19900,
        duration: '15일',
        icon: Star,
        description: '2주간 과학논문 주제 탐색 (기능 동일)',
        color: 'green',
        popular: true
      },
      {
        id: '30일 이용권',
        title: '30일 프리미엄', 
        price: 24900,
        originalPrice: 39000,
        duration: '30일',
        icon: CreditCard,
        description: '한 달간 과학논문 주제 탐색 (기능 동일)',
        color: 'purple',
        popular: false
      },
      {
        id: '선생님(90일) 이용권',
        title: '선생님(90일) 이용권',
        price: 52900,
        originalPrice: 119000,
        duration: '90일',
        icon: GraduationCap,
        description: '교육용 3개월 과학논문 주제 탐색 (기능 동일)',
        color: 'orange',
        popular: false
      }
    ];

    const selectLicense = (licenseType, price) => {
      setSelectedLicense(licenseType);
      setSelectedPrice(price);
      setResult({ type: '', message: '' });
    };

    const handleSubmit = async () => {
      if (!selectedLicense) {
        alert('이용권을 선택해주세요.');
        return;
      }

      if (!buyerEmail) {
        alert('이메일을 입력해주세요.');
        return;
      }

      // 로딩 상태 시작
      setLoading(true);
      setResult({ type: '', message: '' });

      try {
        // 🔥 실제 작동하는 Google Apps Script URL 사용
        const form = document.createElement('form');
        form.method = 'POST';
        form.action = 'https://script.google.com/macros/s/AKfycbyCy2O5iuXn9RlCA5Gj32IyQfSVzXScaKvFtmzcQba_nFAdFNu2d-mPSecOTTb_-Gor/exec';
        form.target = '_blank';

        // 데이터 추가
        const actionInput = document.createElement('input');
        actionInput.type = 'hidden';
        actionInput.name = 'action';
        actionInput.value = 'purchase';
        form.appendChild(actionInput);

        const licenseInput = document.createElement('input');
        licenseInput.type = 'hidden';
        licenseInput.name = 'licenseType';
        licenseInput.value = selectedLicense;
        form.appendChild(licenseInput);

        const emailInput = document.createElement('input');
        emailInput.type = 'hidden';
        emailInput.name = 'buyerEmail';
        emailInput.value = buyerEmail;
        form.appendChild(emailInput);

        // 🔥 타임스탬프 추가
        const timestampInput = document.createElement('input');
        timestampInput.type = 'hidden';
        timestampInput.name = 'timestamp';
        timestampInput.value = new Date().toISOString();
        form.appendChild(timestampInput);

        document.body.appendChild(form);
        form.submit();
        document.body.removeChild(form);

        // 성공 메시지 표시
        setResult({
          type: 'success',
          message: `구매 요청 완료! ${buyerEmail}로 이용권 코드가 발송됩니다. 새 창에서 PayApp 결제를 진행해주세요.`
        });

      } catch (error) {
        setResult({
          type: 'error',
          message: '오류 발생. 다시 시도해주세요.'
        });
      }

      // 로딩 상태 해제
      setLoading(false);
    };

    const isFormValid = selectedLicense && buyerEmail;
    
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
              <div className="flex items-center space-x-4">
                <button 
                  onClick={() => setCurrentPage('landing')}
                  className="text-slate-600 hover:text-slate-900 px-4 py-2 rounded-lg text-sm font-medium transition-all hover:bg-slate-100"
                >
                  홈으로
                </button>
                <a href="https://littlescienceaichat.web.app" target="_blank" rel="noopener noreferrer">
                  <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2.5 rounded-xl text-sm font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                    무료체험
                  </button>
                </a>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-white rounded-3xl shadow-2xl border border-slate-200/50 overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-12 text-center text-white">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Beaker className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-3xl font-bold mb-4">🧪 과학연구설계 AI</h1>
              <p className="text-xl text-blue-100">과학논문 주제 탐색 도우미 이용권 구매</p>
            </div>

            <div className="p-8">
              <div className="space-y-8">
                {/* License Options */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-slate-800 mb-6">이용권을 선택해주세요</h3>
                  
                  {licenses.map((license) => {
                    const IconComponent = license.icon;
                    const isSelected = selectedLicense === license.id;
                    const discountPercent = Math.round((1 - license.price / license.originalPrice) * 100);
                    
                    return (
                      <div
                        key={license.id}
                        onClick={() => selectLicense(license.id, license.price)}
                        className={`relative border-2 rounded-2xl p-6 cursor-pointer transition-all transform hover:-translate-y-1 hover:shadow-lg ${
                          isSelected
                            ? 'border-blue-500 bg-blue-50 shadow-lg'
                            : 'border-slate-200 hover:border-blue-300'
                        }`}
                      >
                        {license.popular && (
                          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                            <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg flex items-center">
                              <Star className="w-4 h-4 mr-1" />
                              인기
                            </div>
                          </div>
                        )}
                        
                        {/* 🔥 할인율 표시 */}
                        <div className="absolute -top-3 right-6">
                          <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                            {discountPercent}% 할인
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-4">
                          <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${
                            license.color === 'blue' ? 'bg-blue-100' :
                            license.color === 'green' ? 'bg-green-100' :
                            license.color === 'purple' ? 'bg-purple-100' :
                            'bg-orange-100'
                          }`}>
                            <IconComponent className={`w-7 h-7 ${
                              license.color === 'blue' ? 'text-blue-600' :
                              license.color === 'green' ? 'text-green-600' :
                              license.color === 'purple' ? 'text-purple-600' :
                              'text-orange-600'
                            }`} />
                          </div>
                          
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <h4 className="text-xl font-bold text-slate-800">
                                🎫 {license.title}
                              </h4>
                              <div className="text-right">
                                {/* 🔥 원가 취소선 + 할인가 */}
                                <div className="text-sm text-slate-400 line-through">
                                  {license.originalPrice.toLocaleString()}원
                                </div>
                                <div className="text-2xl font-bold text-blue-600">
                                  {license.price.toLocaleString()}원
                                </div>
                              </div>
                            </div>
                            <p className="text-slate-600 mt-1">{license.description}</p>
                          </div>
                          
                          <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                            isSelected 
                              ? 'border-blue-500 bg-blue-500'
                              : 'border-slate-300'
                          }`}>
                            {isSelected && <CheckCircle className="w-4 h-4 text-white" />}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* 🔥 기능 동일성 안내 추가 */}
                <div className="bg-yellow-50 border-2 border-yellow-200 rounded-2xl p-6">
                  <div className="flex items-start space-x-3">
                    <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-yellow-800 mb-2">💡 중요 안내</h4>
                      <p className="text-yellow-700 text-sm leading-relaxed">
                        <strong>모든 이용권의 기능은 완전히 동일합니다.</strong> 
                        기간만 다르며, 7일이든 90일이든 같은 과학논문 주제 탐색 도구를 사용하실 수 있습니다. 
                        연구 기간에 맞춰 선택해주세요.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Email Input */}
                <div className="space-y-2">
                  <label htmlFor="buyerEmail" className="flex items-center text-lg font-semibold text-slate-800">
                    <Mail className="w-5 h-5 mr-2" />
                    📧 이메일 주소
                  </label>
                  <input
                    type="email"
                    id="buyerEmail"
                    value={buyerEmail}
                    onChange={(e) => setBuyerEmail(e.target.value)}
                    placeholder="example@email.com"
                    required
                    className="w-full px-6 py-4 border-2 border-slate-200 rounded-2xl text-lg focus:border-blue-500 focus:outline-none transition-colors"
                  />
                  <p className="text-sm text-slate-500 pl-2">
                    코드 발송용 이메일 주소를 정확히 입력해주세요
                  </p>
                </div>

                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  disabled={!isFormValid || loading}
                  className={`w-full py-5 rounded-2xl text-lg font-bold transition-all transform flex items-center justify-center space-x-3 ${
                    isFormValid && !loading
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 hover:-translate-y-1 shadow-lg hover:shadow-xl'
                      : 'bg-slate-300 text-slate-500 cursor-not-allowed'
                  }`}
                >
                  {loading ? (
                    <>
                      <Loader className="w-6 h-6 animate-spin" />
                      <span>구매 처리 중...</span>
                    </>
                  ) : isFormValid ? (
                    <>
                      <CreditCard className="w-6 h-6" />
                      <span>{selectedLicense} 구매하기 ({selectedPrice.toLocaleString()}원)</span>
                    </>
                  ) : (
                    <span>이용권 선택 후 구매하기</span>
                  )}
                </button>
              </div>

              {/* Result Message */}
              {result.message && (
                <div className={`mt-6 p-4 rounded-2xl border-2 ${
                  result.type === 'success'
                    ? 'bg-green-50 border-green-200 text-green-800'
                    : 'bg-red-50 border-red-200 text-red-800'
                }`}>
                  <div className="flex items-start space-x-3">
                    {result.type === 'success' ? (
                      <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    ) : (
                      <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                    )}
                    <div>
                      <strong>{result.type === 'success' ? '✅ 구매 요청 완료!' : '❌ 오류 발생'}</strong>
                      <p className="mt-1">{result.message}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  // 현재 페이지에 따라 컴포넌트 렌더링
  return (
    <div className="App">
      {currentPage === 'landing' ? <LandingPage /> : <PricingPage />}
    </div>
  );
};
