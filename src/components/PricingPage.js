import React, { useState } from 'react';
import { 
  Beaker, 
  Clock, 
  Star, 
  GraduationCap,
  Mail,
  CreditCard,
  CheckCircle,
  AlertCircle,
  Loader
} from 'lucide-react';

const PricingPage = ({ onBackToLanding }) => {
  const [selectedLicense, setSelectedLicense] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState(0);
  const [buyerEmail, setBuyerEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState({ type: '', message: '' });

  const licenses = [
    {
      id: '7일 이용권',
      title: '7일 이용권',
      price: 7900, // 🔥 11900원 -> 7900원
      originalPrice: 11900, // 🔥 원가 표시
      duration: '7일',
      icon: Clock,
      description: '일주일간 과학논문 주제 탐색 (기능 동일)',
      color: 'blue',
      popular: false
    },
    {
      id: '15일 이용권', 
      title: '15일 베이직',
      price: 14900, // 🔥 19900원 -> 14900원 (동일)
      originalPrice: 19900, // 🔥 원가 표시
      duration: '15일',
      icon: Star,
      description: '2주간 과학논문 주제 탐색 (기능 동일)',
      color: 'green',
      popular: true
    },
    {
      id: '30일 이용권',
      title: '30일 프리미엄', 
      price: 24900, // 🔥 18900원 -> 24900원
      originalPrice: 39000, // 🔥 원가 표시
      duration: '30일',
      icon: CreditCard,
      description: '한 달간 과학논문 주제 탐색 (기능 동일)',
      color: 'purple',
      popular: false
    },
    {
      id: '선생님(90일) 이용권',
      title: '선생님(90일) 이용권',
      price: 52900, // 🔥 99000원 -> 52900원
      originalPrice: 119000, // 🔥 원가 표시
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
      // 🔥 X-Frame-Options 때문에 iframe 대신 새창 방식 사용
      const form = document.createElement('form');
      form.method = 'POST';
      form.action = 'https://script.google.com/macros/s/AKfycbwzyGw4_yBIVvYuRNZ6EwvAU_kU55ewbnJU1nn9PLZRXQFeTGU3bmqxKWlHmJIrUJM/exec';
      form.target = '_blank'; // 🔥 새창에서 열기

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
                onClick={() => window.location.href = 'https://littlescienceaichat-landing.web.app/index.html'}
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

export default PricingPage;
