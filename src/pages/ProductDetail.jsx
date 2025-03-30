import { useParams } from 'react-router-dom';
import { products } from '../data/products';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-white">
        <div className="text-center max-w-md p-8 rounded-2xl shadow-xl bg-white">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Sản phẩm không tồn tại</h1>
          <Link 
            to="/products" 
            className="inline-flex items-center px-6 py-3 rounded-full bg-[#c0392b] text-white hover:bg-[#a53125] transition-all font-medium shadow-lg hover:shadow-xl"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Quay lại danh sách
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-b from-red-50 to-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#c0392b]/10 to-transparent z-0"></div>
        <div className="container mx-auto px-4 py-12 relative z-10">
          <div className="flex flex-col lg:flex-row items-center">
            {/* Product Gallery - Creative Layout */}
            <div className="lg:w-1/2 mb-10 lg:mb-0 relative">
              <div className="relative group">
                <div className="absolute -inset-2 bg-[#c0392b] rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="relative w-full max-w-lg mx-auto rounded-xl shadow-2xl object-cover transform transition duration-500 group-hover:scale-105"
                />
              </div>
              
              {/* Thumbnail Gallery as Floating Dots */}
              <div className="flex justify-center mt-6 space-x-3">
                {[1, 2, 3, 4].map((item) => (
                  <button 
                    key={item}
                    className="w-3 h-3 rounded-full bg-gray-300 hover:bg-[#c0392b] transition"
                    aria-label={`Xem ảnh ${item}`}
                  />
                ))}
              </div>
            </div>
            
            {/* Product Info - Creative Layout */}
            <div className="lg:w-1/2 lg:pl-12">
              {/* Floating Badges */}
              <div className="flex flex-wrap gap-3 mb-6">
                {product.stock > 0 && (
                  <span className="px-3 py-1 rounded-full bg-green-100 text-green-800 text-sm font-medium flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Còn hàng
                  </span>
                )}
                {product.discount && (
                  <span className="px-3 py-1 rounded-full bg-red-100 text-red-800 text-sm font-medium">
                    Giảm {product.discount}%
                  </span>
                )}
                <span className="px-3 py-1 rounded-full bg-yellow-100 text-yellow-800 text-sm font-medium">
                  Bán chạy
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                {product.name}
              </h1>
              
              <div className="flex items-center mb-6">
                <div className="flex mr-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg 
                      key={star} 
                      className={`w-6 h-6 ${star <= product.rating ? 'text-yellow-400' : 'text-gray-300'}`} 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-gray-600 underline cursor-pointer hover:text-[#c0392b]">
                  ({product.reviews} đánh giá)
                </span>
              </div>
              
              {/* Price with Creative Layout */}
              <div className="mb-8 p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-end mb-2">
                  <span className="text-4xl font-bold text-[#c0392b]">
                    {product.price}đ
                  </span>
                  {product.originalPrice && (
                    <span className="ml-3 text-xl text-gray-500 line-through">
                      {product.originalPrice}đ
                    </span>
                  )}
                </div>
                {/* <div className="text-green-600 font-medium">
                  <svg className="w-5 h-5 inline mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  Tiết kiệm {(product.originalPrice - product.price).toLocaleString()}đ
                </div> */}
              </div>
              
              {/* Short Description */}
              <div className="mb-8">
                <p className="text-lg text-gray-700 mb-4">{product.description}</p>
                
                <div className="space-y-3">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-[#c0392b] mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Miễn phí vận chuyển đơn từ 300k</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-[#c0392b] mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Đổi trả trong 7 ngày</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-[#c0392b] mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Tặng kèm quà đặc biệt</span>
                  </div>
                </div>
              </div>
              
              {/* CTA Buttons with Creative Layout */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <div className="flex items-center border-2 border-gray-200 rounded-full overflow-hidden">
                  <button className="px-4 py-3 bg-gray-50 text-gray-600 hover:bg-gray-100">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                    </svg>
                  </button>
                  <span className="px-4 py-2 text-lg font-medium">1</span>
                  <button className="px-4 py-3 bg-gray-50 text-gray-600 hover:bg-gray-100">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </button>
                </div>
                
                <button 
                  className={`flex-1 px-6 py-4 rounded-full font-medium transition-all flex items-center justify-center ${
                    product.stock > 0 
                      ? 'bg-[#c0392b] hover:bg-[#a53125] text-white shadow-lg hover:shadow-xl' 
                      : 'bg-gray-300 text-gray-600 cursor-not-allowed'
                  }`}
                  disabled={product.stock <= 0}
                >
                  <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  {product.stock > 0 ? 'Thêm vào giỏ hàng' : 'Hết hàng'}
                </button>
              </div>
              
              {/* Social Proof */}
              <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                <div className="flex items-center">
                  <div className="flex -space-x-2 mr-3">
                    {[1, 2, 3].map((user) => (
                      <div key={user} className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white"></div>
                    ))}
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-700">Được mua bởi 1.200+ khách hàng</div>
                    <div className="flex items-center text-yellow-400">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg key={star} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                      <span className="ml-1 text-xs text-gray-500">(4.9/5)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Product Tabs with Creative Design */}
      <div className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="border-b border-gray-200">
            <nav className="flex">
              <button className="flex-1 py-5 px-4 text-center font-medium text-lg border-b-2 border-[#c0392b] text-[#c0392b] bg-red-50">
                <svg className="w-6 h-6 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Thông tin chi tiết
              </button>
              <button className="flex-1 py-5 px-4 text-center font-medium text-lg border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50">
                <svg className="w-6 h-6 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                Cách sử dụng
              </button>
              <button className="flex-1 py-5 px-4 text-center font-medium text-lg border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50">
                <svg className="w-6 h-6 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
                Đánh giá ({product.reviews})
              </button>
            </nav>
          </div>
          
          <div className="p-8">
            <div className="prose max-w-none">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Đặc điểm nổi bật</h3>
              <div className="grid md:grid-cols-2 gap-8 mb-10">
                <div>
                  <p className="mb-4 text-lg">{product.name} được làm từ những trái ớt tươi ngon nhất, kết hợp với công thức gia truyền tạo nên hương vị đậm đà khó quên.</p>
                  <p className="mb-4 text-lg">Sản phẩm không chứa chất bảo quản, an toàn cho sức khỏe, phù hợp với mọi lứa tuổi.</p>
                </div>
                <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                  <h4 className="font-bold text-red-800 mb-3 text-lg">Thành phần chính:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Ớt tươi chọn lọc</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Tỏi, hành khô</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Gia vị tự nhiên</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Không chất bảo quản</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Món ăn kết hợp hoàn hảo</h3>
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mb-10">
                {[
                  { name: 'Phở, bún, hủ tiếu', icon: '🍜' },
                  { name: 'Đồ nướng', icon: '🍢' },
                  { name: 'Pizza, mì Ý', icon: '🍕' },
                  { name: 'Gỏi cuốn, chả giò', icon: '🌯' }
                ].map((item, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition text-center">
                    <div className="text-3xl mb-2">{item.icon}</div>
                    <div className="font-medium">{item.name}</div>
                  </div>
                ))}
              </div>
              
              <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-200 mb-10">
                <h4 className="font-bold text-yellow-800 mb-3 text-lg flex items-center">
                  <svg className="w-6 h-6 mr-2 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  Lưu ý quan trọng
                </h4>
                <p className="text-yellow-800">Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp. Sau khi mở nắp nên bảo quản trong tủ lạnh để giữ được hương vị tốt nhất. Sử dụng trong vòng 3 tháng sau khi mở nắp.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Specifications with Creative Layout */}
      <div className="container mx-auto px-4 pb-12">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="bg-[#c0392b] p-6 text-white">
            <h2 className="text-2xl font-bold flex items-center">
              <svg className="w-8 h-8 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              Thông số kỹ thuật
            </h2>
          </div>
          <div className="p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex">
                  <span className="w-1/3 text-gray-600 font-medium">Danh mục</span>
                  <span className="w-2/3 font-medium">{product.category}</span>
                </div>
                <div className="flex">
                  <span className="w-1/3 text-gray-600 font-medium">Độ cay</span>
                  <span className="w-2/3 font-medium">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <svg 
                          key={i} 
                          className={`w-5 h-5 ${i < (product.spicyLevel || 3) ? 'text-red-500' : 'text-gray-300'}`} 
                          fill="currentColor" 
                          viewBox="0 0 20 20"
                        >
                          <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                        </svg>
                      ))}
                      <span className="ml-2">{(product.spicyLevel || 3)}/5</span>
                    </div>
                  </span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex">
                  <span className="w-1/3 text-gray-600 font-medium">Khối lượng</span>
                  <span className="w-2/3 font-medium">{product.weight || '250g'}</span>
                </div>
                <div className="flex">
                  <span className="w-1/3 text-gray-600 font-medium">Hạn sử dụng</span>
                  <span className="w-2/3 font-medium">12 tháng</span>
                </div>
                <div className="flex">
                  <span className="w-1/3 text-gray-600 font-medium">Xuất xứ</span>
                  <span className="w-2/3 font-medium">{product.origin || 'Việt Nam'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Related Products with Creative Layout */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Khám phá thêm</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Những sản phẩm cùng danh mục có thể bạn sẽ thích</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products
            .filter(p => p.category === product.category && p.id !== product.id)
            .slice(0, 4)
            .map(relatedProduct => (
              <ProductCard 
                key={relatedProduct.id} 
                product={relatedProduct} 
                className="transform transition hover:-translate-y-2 hover:shadow-xl"
              />
            ))}
        </div>
        
        <div className="text-center mt-10">
          <Link 
            to="/products" 
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-[#c0392b] hover:bg-[#a53125] transition-all"
          >
            Xem tất cả sản phẩm
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
      
      {/* Guarantee Section */}
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Giao hàng nhanh chóng",
                description: "Miễn phí vận chuyển đơn từ 300k, giao hàng toàn quốc",
                icon: (
                  <svg className="w-10 h-10 text-[#c0392b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                )
              },
              {
                title: "Đảm bảo chất lượng",
                description: "Sản phẩm chính hãng, đảm bảo an toàn vệ sinh thực phẩm",
                icon: (
                  <svg className="w-10 h-10 text-[#c0392b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                  </svg>
                )
              },
              {
                title: "Hỗ trợ 24/7",
                description: "Đội ngũ chăm sóc khách hàng luôn sẵn sàng hỗ trợ",
                icon: (
                  <svg className="w-10 h-10 text-[#c0392b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                )
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition text-center">
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}