import React, { useState } from 'react';
import { 
  Beaker, 
  Clock, 
  Users, 
  Star, 
  GraduationCap,
  Mail,
  CreditCard,
  CheckCircle,
  AlertCircle,
  Loader
} from 'lucide-react';

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
      price: 9900,
      duration: '7일',
      icon: Clock,
      description: '일주일간 빠른 연구 탐색',
      color: 'blue',
      popular: false
    },
    {
      id: '15일 이용권', 
      title: '15일 이용권',
      price: 14900,
      duration: '15일',
      icon: Star,
      description: '2주간 집중 연구 탐색',
      color: 'green',
      popular: true
    },
    {
      id: '30일 이용권',
      title: '30일 이용권', 
      price: 18900,
      duration: '30일',
      icon: CreditCard,
      description: '한 달간 무제한 연구 주제 탐색',
      color: 'purple',
      popular: false
    },
    {
      id: '선생님(90일) 이용권',
      title: '선생님(90일) 이용권',
      price: 99000,
      duration: '90일',
      icon: GraduationCap,
      description: '교육용 3개월 프리미엄 이용권',
      color: 'orange',
      popular: false
    }
  ];

  const selectLicense = (licenseType, price) => {
    setSelectedLicense(licenseType);
    setSelectedPrice(price);
    setResult({ type: '', message: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

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
      // CORS 우회: 동적 form 생성 방식
      const form = document.createElement('form');
      form.method = 'POST';
      form.action = 'https://script.google.com/macros/s/AKfycbzf3jRGmmHaf5okkHfypPucV6Xj0AlOKnrTQ_dcD_Kw-PmMXAkKO-vGmAqLN7QDqFzq/exec';
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

      document.body.appendChild(form);
      form.submit();
      document.body.removeChild(form);

      // 성공 메시지 표시
      setResult({
        type: 'success',
        message: `구매 요청 완료! ${buyerEmail}로 이용권 코드가 발송됩니다. 새 창이 열리면서 처리 결과를 확인할 수 있습니다.`
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
              <button className="text-slate-600 hover:text-slate-900 px-4 py-2 rounded-lg text-sm font-medium transition-all hover:bg-slate-100">
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
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* License Options */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-slate-800 mb-6">이용권을 선택해주세요</h3>
                
                {licenses.map((license) => {
                  const IconComponent = license.icon;
                  const isSelected = selectedLicense === license.id;
                  
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
                            <div className="text-2xl font-bold text-blue-600">
                              {license.price.toLocaleString()}원
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
                type="submit"
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
            </form>

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

        {/* Additional Info */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg text-center">
            <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-3" />
            <h4 className="font-bold text-slate-800 mb-2">즉시 발송</h4>
            <p className="text-sm text-slate-600">구매 완료 즉시 이메일로 이용권 코드를 받아보세요</p>
          </div>
          
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg text-center">
            <Users className="w-8 h-8 text-blue-600 mx-auto mb-3" />
            <h4 className="font-bold text-slate-800 mb-2">안전한 결제</h4>
            <p className="text-sm text-slate-600">검증된 결제 시스템으로 안전하게 거래하세요</p>
          </div>
          
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg text-center">
            <Clock className="w-8 h-8 text-purple-600 mx-auto mb-3" />
            <h4 className="font-bold text-slate-800 mb-2">24시간 지원</h4>
            <p className="text-sm text-slate-600">언제든지 문의사항이 있으면 연락주세요</p>
          </div>
        </div>
      </div>

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
              <h4 className="font-bold text-white mb-6 text-lg">결제 및 지원</h4>
              <ul className="space-y-3">
                <li><a href="#" className="hover:text-white transition-colors text-sm">결제 방법</a></li>
                <li><a href="#" className="hover:text-white transition-colors text-sm">환불 정책</a></li>
                <li><a href="#" className="hover:text-white transition-colors text-sm">이용약관</a></li>
                <li><a href="#" className="hover:text-white transition-colors text-sm">개인정보처리방침</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-6 text-lg">고객지원</h4>
              <ul className="space-y-3">
                <li><a href="#" className="hover:text-white transition-colors text-sm">사용방법 안내</a></li>
                <li><a href="#" className="hover:text-white transition-colors text-sm">자주묻는질문</a></li>
                <li><a href="#" className="hover:text-white transition-colors text-sm">문의하기</a></li>
                <li><a href="#" className="hover:text-white transition-colors text-sm">피드백 보내기</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-slate-400 mb-4 md:mb-0">
              © 2025 과학연구설계 AI. 모든 권리 보유.
            </p>
            <div className="flex items-center text-sm text-slate-400 space-x-2">
              <CheckCircle className="w-4 h-4" />
              <span>안전한 결제 시스템</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PricingPage;
