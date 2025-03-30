import { Link } from "react-router-dom";
import { products } from "../data/products";
import { news } from "../data/news";
import ProductCard from "../components/ProductCard";
import NewsCard from "../components/NewsCard";

export default function Home() {
  const featuredProducts = products.slice(0, 5);
  const latestNews = news.slice(0, 3);

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative min-h-[500px] overflow-hidden">
        <div className="absolute inset-0 bg-black/30 z-10"></div>
        <img
          src="https://theme.hstatic.net/200000771803/1001115608/14/collection_banner.jpg?v=313"
          alt="Tương ớt đặc sản"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-4 mt-6">
          <div className="mb-8">
            {/* <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm mb-4 border border-white/30">
              🌶️ Đậm đà hương vị Việt
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              <span className="text-red-200">Tương ớt nhà làm</span> <br />
              Vị cay nồng nàn, chất quê đong đầy
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed">
              Khám phá thế giới tương ớt đặc sản với công thức gia truyền, 
              chọn lọc từ những nguyên liệu tươi ngon nhất, mang hương vị đặc trưng khó quên
            </p> */}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-90">
            <Link
              to="/products"
              className="relative overflow-hidden group bg-[#c0392b] hover:bg-[#a53125] text-white px-8 py-4 rounded-lg text-lg font-medium transition-all duration-500 shadow-xl hover:shadow-2xl"
            >
              <span className="relative z-10 flex items-center justify-center">
                Thưởng thức ngay
                <svg
                  className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-800 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
            </Link>

            <Link
              to="/about"
              className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg text-lg font-medium transition-all duration-300 border border-white/30 backdrop-blur-sm"
            >
              Về chúng tôi
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Image Column */}
          <div className="md:w-1/2 h-[350px]">
            <img
              src="https://img.pikbest.com/templates/20240614/supermarket-ketchup-chili-sauce-seasoning-banner_10621594.jpg!w700wp"
              alt="Về chúng tôi"
              className="w-full h-full object-cover rounded-xl shadow-lg hover:shadow-xl transition duration-500 hover:-translate-y-2"
            />
          </div>

          {/* Text Column */}
          <div className="md:w-1/2">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-6">
              <span className="text-[#c0392b]">Tương ớt gia truyền</span> - Hành trình 
              giữ gìn hương vị quê hương
            </h2>
            <p className="text-gray-600 mb-4 md:mb-6 leading-relaxed">
              Từ bí quyết gia truyền 3 đời, chúng tôi mang đến những chai tương ớt 
              thơm ngon đậm đà, được chế biến từ những trái ớt tươi ngon nhất, 
              kết hợp với công thức độc đáo mang đậm bản sắc Việt.
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-start">
                <div className="bg-red-100 p-2 rounded-full mr-3">
                  <svg
                    className="w-4 h-4 text-red-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
                <p className="text-gray-700 text-sm md:text-base">
                  100% nguyên liệu tự nhiên, không chất bảo quản
                </p>
              </div>
              <div className="flex items-start">
                <div className="bg-red-100 p-2 rounded-full mr-3">
                  <svg
                    className="w-4 h-4 text-red-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
                <p className="text-gray-700 text-sm md:text-base">
                  Công thức gia truyền 3 đời
                </p>
              </div>
              <div className="flex items-start">
                <div className="bg-red-100 p-2 rounded-full mr-3">
                  <svg
                    className="w-4 h-4 text-red-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
                <p className="text-gray-700 text-sm md:text-base">
                  Đa dạng hương vị từ cay nhẹ đến cay xé lưỡi
                </p>
              </div>
            </div>

            <Link
              to="/about"
              className="inline-block bg-[#c0392b] hover:bg-[#a53125] text-white px-5 py-2 md:px-6 md:py-3 rounded-lg text-sm md:text-base font-medium transition duration-300 shadow-md hover:shadow-lg"
            >
              Khám phá câu chuyện của chúng tôi
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-4 py-12 bg-gray-50 rounded-xl">
        <div className="text-center mb-12">
          <span className="inline-block bg-red-100 text-red-800 text-sm font-semibold px-4 py-1 rounded-full mb-3">
            SẢN PHẨM ĐẶC BIỆT
          </span>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Tương ớt nổi bật
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Khám phá các loại tương ớt được yêu thích nhất của chúng tôi
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/products"
            className="inline-block border-2 border-[#c0392b] text-[#c0392b] hover:bg-[#c0392b] hover:text-white px-8 py-3 rounded-lg text-lg font-medium transition duration-300"
          >
            Xem tất cả sản phẩm
          </Link>
        </div>
      </section>

      {/* Latest News */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <span className="inline-block bg-red-100 text-red-800 text-sm font-semibold px-4 py-1 rounded-full mb-3">
            KIẾN THỨC ẨM THỰC
          </span>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Mẹo hay & Công thức
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Cập nhật kiến thức mới nhất về cách sử dụng và kết hợp tương ớt
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestNews.map((newsItem) => (
            <NewsCard key={newsItem.id} newsItem={newsItem} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/news"
            className="inline-block border-2 border-[#c0392b] text-[#c0392b] hover:bg-[#c0392b] hover:text-white px-8 py-3 rounded-lg text-lg font-medium transition duration-300"
          >
            Xem tất cả bài viết
          </Link>
        </div>
      </section>
    </div>
  );
}