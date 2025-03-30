export default function CustomerPolicy() {
    return (
        <div className="container mx-auto px-6 py-12 max-w-4xl bg-red-50 rounded-xl shadow-lg border-2 border-red-500 mt-10 mb-10">
            <div className="bg-red-100 rounded-xl p-8 mb-12 text-center border-b-4 border-red-500">
                <h1 className="text-3xl md:text-4xl font-bold text-red-700 mb-2">❤️ Chính sách khách hàng</h1>
                <p className="text-lg text-red-600">Cam kết mang đến trải nghiệm tốt nhất cho khách hàng!</p>
            </div>

            <div className="prose prose-red max-w-none">
                <div className="bg-white rounded-xl shadow-md p-8">
                    
                    {/* Chính sách chăm sóc khách hàng */}
                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-red-700 mb-4 flex items-center">
                            <svg className="w-6 h-6 text-red-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3-3m0 0l3 3m-3-3v6m-6 6h12a2 2 0 002-2v-4a2 2 0 00-2-2H6a2 2 0 00-2 2v4a2 2 0 002 2z" />
                            </svg>
                            1. Chính sách chăm sóc khách hàng
                        </h2>
                        <p className="text-gray-700">
                            Chúng tôi cam kết cung cấp dịch vụ hỗ trợ khách hàng **24/7**, sẵn sàng giải đáp mọi thắc mắc qua các kênh:
                        </p>
                        <ul className="list-disc pl-6 mt-3 space-y-2 text-red-700">
                            <li>📞 Hotline: 0988 223 222</li>
                            <li>📩 Email: tecayme@gmail.com</li>
                            <li>💬 Chat trực tuyến trên website</li>
                            <li>🔔 Hỗ trợ tại cửa hàng trong giờ làm việc</li>
                        </ul>
                    </section>

                    {/* Chính sách bảo hành */}
                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-red-700 mb-4 flex items-center">
                            <svg className="w-6 h-6 text-red-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M4 6h16M4 12h16M4 18h16" />
                            </svg>
                            2. Chính sách bảo hành
                        </h2>
                        <p className="text-gray-700">
                            Tất cả sản phẩm mua tại **TechStore** đều được bảo hành chính hãng với các điều kiện sau:
                        </p>
                        <ul className="list-disc pl-6 mt-3 space-y-2 text-red-700">
                            <li>📌 Bảo hành từ **6 - 24 tháng** tùy sản phẩm.</li>
                            <li>⚡ Hỗ trợ **đổi mới trong 7 ngày** nếu lỗi từ nhà sản xuất.</li>
                            <li>🛠 Dịch vụ **sửa chữa tận nơi** hoặc tại trung tâm bảo hành.</li>
                        </ul>
                    </section>

                    {/* Chính sách đổi trả */}
                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-red-700 mb-4 flex items-center">
                            <svg className="w-6 h-6 text-red-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h8m-8 6h8m5 0h3m-3 0l-3-3m3 3l-3 3" />
                            </svg>
                            3. Chính sách đổi trả
                        </h2>
                        <p className="text-gray-700">
                            **TechStore** áp dụng chính sách đổi trả linh hoạt:
                        </p>
                        <ul className="list-disc pl-6 mt-3 space-y-2 text-red-700">
                            <li>⏳ **Đổi trả trong vòng 7 ngày** nếu lỗi kỹ thuật.</li>
                            <li>💰 Hoàn tiền **100%** nếu không hài lòng trong vòng 3 ngày.</li>
                            <li>⚠️ Sản phẩm phải còn nguyên hộp, hóa đơn và đầy đủ phụ kiện.</li>
                        </ul>
                    </section>

                    {/* Chính sách thành viên */}
                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-red-700 mb-4 flex items-center">
                            <svg className="w-6 h-6 text-red-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 2.21-1.79 4-4 4s-4-1.79-4-4 1.79-4 4-4 4 1.79 4 4zm6-4h6m-3-3v6M21 21h-6m3 3v-6" />
                            </svg>
                            4. Chính sách thành viên
                        </h2>
                        <p className="text-gray-700">
                            Khách hàng thân thiết sẽ nhận được nhiều ưu đãi hấp dẫn:
                        </p>
                        <ul className="list-disc pl-6 mt-3 space-y-2 text-red-700">
                            <li>🎁 **Giảm 10%** khi mua hàng lần thứ 2.</li>
                            <li>🏆 **Nhận điểm thưởng** khi mua hàng để đổi quà.</li>
                            <li>📢 **Ưu tiên mua sớm** các sản phẩm hot.</li>
                        </ul>
                    </section>

                    {/* Chính sách bảo mật */}
                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-red-700 mb-4 flex items-center">
                            <svg className="w-6 h-6 text-red-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m6-6V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                            5. Chính sách bảo mật
                        </h2>
                        <p className="text-gray-700">
                            Chúng tôi cam kết bảo vệ thông tin cá nhân của khách hàng, không chia sẻ dữ liệu với bên thứ ba khi chưa có sự đồng ý.
                        </p>
                    </section>

                    <div className="mt-12 border-t pt-8 text-center">
                        <h3 className="text-xl font-semibold text-red-700 mb-3">🔥 Cam kết từ Tê Cay Mê</h3>
                        <p className="text-gray-700">Sự hài lòng của bạn là ưu tiên hàng đầu của chúng tôi! 💯</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
