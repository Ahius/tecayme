import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header với hình nền xanh lá */}
      <div className="bg-red-50 rounded-xl p-8 mb-12 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-red-800 mb-4">
          Liên hệ ngay với chúng tôi!
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Chúng tôi luôn sẵn lòng lắng nghe mọi thắc mắc và tư vấn miễn phí về
          những vấn đề bạn gặp phải
        </p>
      </div>

      {/* Grid thông tin liên hệ và form */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        {/* Thông tin liên hệ */}
        <div className="bg-white rounded-xl shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <svg
              className="w-6 h-6 text-red-600 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            Thông tin liên hệ
          </h2>

          <div className="space-y-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-red-100 p-2 rounded-lg">
                <svg
                  className="w-6 h-6 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  Địa chỉ cửa hàng
                </h3>
                <p className="text-gray-600 mt-1">Thủ Dầu Một, Bình Dương</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 bg-red-100 p-2 rounded-lg">
                <svg
                  className="w-6 h-6 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  Điện thoại
                </h3>
                <p className="text-gray-600 mt-1">
                  0988 223 222
                  <br />
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 bg-red-100 p-2 rounded-lg">
                <svg
                  className="w-6 h-6 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-800">Email</h3>
                <p className="text-gray-600 mt-1"> tecayme@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 bg-red-100 p-2 rounded-lg">
                <svg
                  className="w-6 h-6 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  Giờ làm việc
                </h3>
                <p className="text-gray-600 mt-1">
                  Thứ 2 - Thứ 6: 8:00 - 17:00 <br />
                  Thứ 7: 8:00 - 12:00 <br />
                  Chủ nhật: Nghỉ
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Form liên hệ */}
        <div className="bg-white rounded-xl shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <svg
              className="w-6 h-6 text-red-600 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
              />
            </svg>
            Gửi email ngay
          </h2>
          <ContactForm />
        </div>
      </div>

      {/* Bản đồ */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden mb-12">
        <div className="p-6 border-b">
          <h2 className="text-2xl font-bold text-gray-800 flex items-center">
            <svg
              className="w-6 h-6 text-red-600 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            Địa chỉ cụ thể
          </h2>
        </div>
        <div className="bg-gray-200 h-96 w-full">
          {/* Embed Google Map */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.1234567890123!2d106.65698741533838!3d10.9809999921875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d1aaf0a3b9a5%3A0x123456789abcdef!2zVHLGsOG7nW5nIMSQ4bqhaSBI4buNYyBUaOG7jSBN4buFdCwgQ-G6p24gTOG7mWkgMiwgQsOsbmggRMawxqFuZw!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="filter grayscale-0 hover:grayscale-0 transition"
          ></iframe>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-red-50 rounded-xl p-8 text-center">
        <h3 className="text-2xl font-bold text-red-800 mb-4">
          Bạn cần tư vấn ngay?
        </h3>

        <a
          href="tel:0909123456"
          className="inline-flex items-center px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
          Gọi ngay: 0988 223 222
        </a>
      </div>
    </div>
  );
}
