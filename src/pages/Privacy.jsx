export default function Privacy() {
  return (
    <div className="container mx-auto px-6 py-12 max-w-4xl bg-red-50 rounded-xl shadow-lg border-2 border-red-500 mt-10 mb-10">
      <div className="bg-red-100 rounded-xl p-8 mb-12 text-center border-b-4 border-red-500">
        <h1 className="text-3xl md:text-4xl font-bold text-red-700 mb-2">🌶 Chính sách Bảo mật</h1>
        <p className="text-lg text-red-600">Chúng tôi cam kết bảo vệ thông tin của bạn một cách an toàn!</p>
      </div>
      
      <div className="prose prose-red max-w-none">
        <div className="bg-white rounded-xl shadow-md p-8">
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-red-700 mb-4 flex items-center">
              <svg className="w-6 h-6 text-red-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              1. Thu thập thông tin
            </h2>
            <div className="text-gray-700 space-y-3">
              <p>Chúng tôi thu thập thông tin cá nhân của bạn khi bạn đăng ký tài khoản, đặt hàng, hoặc điền vào biểu mẫu trên website.</p>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="font-medium text-red-800">📌 Thông tin chúng tôi thu thập:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1 text-red-700">
                  <li>Tên, địa chỉ email, số điện thoại</li>
                  <li>Địa chỉ giao hàng và thanh toán</li>
                  <li>Thông tin về sở thích mua sắm</li>
                </ul>
              </div>
            </div>
          </section>
          
          <div className="mt-12 border-t pt-8">
            <h3 className="text-xl font-semibold text-red-700 mb-3">🔥 Cam kết của chúng tôi</h3>
            <p className="text-gray-700 mb-4">Chúng tôi cam kết bảo vệ tuyệt đối thông tin cá nhân của khách hàng theo chính sách bảo mật này và các quy định pháp luật.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
