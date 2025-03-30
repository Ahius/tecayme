import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="relative bg-[#c0392b] text-white pt-12 pb-6">
      {/* Background Image for Footer */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="https://quangcaodantri.vn/wp-content/uploads/2024/08/A42_NPU-2-1_1710467883.jpg"
          alt="Footer background"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Giới thiệu */}
          <div>
            <h3 className="text-xl font-bold mb-4">Tê Cay Mê 🌶️</h3>
          </div>

          {/* Liên hệ */}
          <div>
            <h4 className="font-bold mb-4">Liên hệ</h4>
            <address className="not-italic text-white/80 space-y-2">
              <p className="flex items-start">
                <svg
                  className="w-5 h-5 mr-2 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  ></path>
                </svg>
                <span>
                  Hotline: 0988 223 222
                  <br />
                </span>
              </p>
              <p className="flex items-center">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
                tecayme@gmail.com
              </p>
              <p className="flex items-start">
                <svg
                  className="w-5 h-5 mr-2 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                </svg>
                <span>Thủ Dầu Một, Bình Dương</span>
              </p>
            </address>
          </div>

          {/* Liên kết nhanh */}
          <div>
            <h4 className="font-bold mb-4">Truy cập nhanh</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-white/80 hover:text-white transition flex items-center"
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                  Trang chủ
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-white/80 hover:text-white transition flex items-center"
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                  Sản phẩm
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-white/80 hover:text-white transition flex items-center"
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-white/80 hover:text-white transition flex items-center"
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                  Liên hệ
                </Link>
              </li>
            </ul>
          </div>

          {/* Chính sách */}
          <div>
            <h4 className="font-bold mb-4">Chính sách</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/terms"
                  className="text-white/80 hover:text-white transition flex items-center"
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                  Điều khoản
                </Link>
              </li>

              <li>
                <Link
                  to="/privacy"
                  className="text-white/80 hover:text-white transition flex items-center"
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                  Bảo mật
                </Link>
              </li>
              <li>
                <Link
                  to="/cuspolicy"
                  className="text-white/80 hover:text-white transition flex items-center"
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                  Chính sách khách hàng
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="text-white/80 hover:text-white transition flex items-center"
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 mt-8 pt-6 text-center text-white/60 text-sm">
          <p>© {new Date().getFullYear()} Tê Cay Mê. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
