export default function About() {
  return (
    <div className="bg-white">
      {/* Hero Section với hình ảnh tương ớt đẹp mắt */}
      <div className="relative h-66 md:h-screen max-h-[500px] overflow-hidden">
        <img
          src="https://theme.hstatic.net/200000771803/1001115608/14/img_home_banner_desktop_2.jpg?v=313"
          alt="Về Vị Cay Đặc Trưng"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex items-end pb-20 md:items-center md:pb-0">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              <span className="text-red-400">Vị Cay Đặc Trưng</span>
            </h1>
            <p className="text-xl md:text-2xl text-red-100 max-w-2xl mx-auto">
              Hành trình mang hương vị cay nồng truyền thống đến mọi nhà
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 md:py-20">
        {/* Giới thiệu công ty */}
        <section className="mb-20">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <div className="relative">
                <img
                  src="https://chus.vn/images/Blog/T%C6%B0%C6%A1ng%20%E1%BB%9Bt%20n%C3%A0o%20an%20to%C3%A0n%20cho%20s%E1%BB%A9c%20kh%E1%BB%8Fe%20gia%20%C4%91%C3%ACnh%20b%E1%BA%A1n%20gi%E1%BB%AFa%20v%C3%B4%20v%C3%A0n%20ch%E1%BA%A5t%20ph%E1%BB%A5%20gia%3F/1.jpg?1719893877435"
                  alt="Sản xuất tương ớt"
                  className="rounded-xl shadow-xl w-full"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg border border-red-100">
                  <div className="flex items-center">
                    <div className="bg-red-100 p-2 rounded-full mr-3">
                      <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800">100%</h3>
                      <p className="text-sm text-gray-600">Nguyên liệu tự nhiên</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                <span className="text-red-600">Vị Cay Đặc Trưng</span> - Tinh hoa ẩm thực Việt
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Từ năm 2010, chúng tôi bắt đầu hành trình bảo tồn và phát triển các công thức tương ớt gia truyền. 
                Mỗi lọ tương ớt là sự kết hợp hoàn hảo giữa ớt tươi chọn lọc, tỏi, gia vị và bí quyết riêng, 
                mang đến hương vị cay nồng đậm đà khó quên.
              </p>
              <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-600">
                <p className="italic text-gray-700">
                  "Không chỉ là gia vị, mỗi giọt tương ớt của chúng tôi là cả một câu chuyện về văn hóa ẩm thực Việt Nam"
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Lịch sử phát triển */}
        <section className="mb-20 bg-gradient-to-r from-red-50 to-white p-8 md:p-12 rounded-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Hành trình phát triển
          </h2>
          
          <div className="relative">
            {/* Timeline */}
            <div className="hidden md:block absolute left-1/2 h-full w-1 bg-red-200 transform -translate-x-1/2"></div>
            
            {/* Timeline Items */}
            <div className="space-y-12">
              {[
                {
                  year: "2010",
                  title: "Khởi nghiệp",
                  content: "Bắt đầu từ một xưởng sản xuất nhỏ với công thức gia truyền 3 đời",
                  side: "left"
                },
                {
                  year: "2014",
                  title: "Mở rộng",
                  content: "Xây dựng nhà máy đạt chuẩn vệ sinh an toàn thực phẩm",
                  side: "right"
                },
                {
                  year: "2018",
                  title: "Đột phá",
                  content: "Ra mắt dòng sản phẩm cao cấp với nguyên liệu nhập khẩu",
                  side: "left"
                },
                {
                  year: "Hiện tại",
                  title: "Vị thế",
                  content: "Top 5 thương hiệu tương ớt được yêu thích nhất Việt Nam",
                  side: "right"
                }
              ].map((item, index) => (
                <div 
                  key={index} 
                  className={`flex flex-col md:flex-row ${item.side === 'left' ? 'md:justify-start' : 'md:justify-end'} items-center`}
                >
                  <div className={`md:w-1/2 p-6 ${item.side === 'left' ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'} order-1`}>
                    <h3 className="text-2xl font-bold text-red-600 mb-2">{item.year}</h3>
                    <h4 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h4>
                    <p className="text-gray-600">{item.content}</p>
                  </div>
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold order-2 z-10">
                    {index + 1}
                  </div>
                  <div className={`md:w-1/2 p-6 ${item.side === 'left' ? 'md:pl-12' : 'md:pr-12'} order-3`}></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Giá trị cốt lõi */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Giá trị cốt lõi
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Truyền thống",
                desc: "Giữ nguyên hương vị truyền thống qua nhiều thế hệ",
                icon: (
                  <svg className="w-10 h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                )
              },
              {
                title: "Chất lượng",
                desc: "Chọn lọc nguyên liệu tốt nhất, không chất bảo quản",
                icon: (
                  <svg className="w-10 h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                )
              },
              {
                title: "Sáng tạo",
                desc: "Liên tục cải tiến để đa dạng hương vị",
                icon: (
                  <svg className="w-10 h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                )
              },
              {
                title: "Tận tâm",
                desc: "Đặt sự hài lòng của khách hàng lên hàng đầu",
                icon: (
                  <svg className="w-10 h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                )
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300 border border-gray-100">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-center text-gray-800 mb-3">{item.title}</h3>
                <p className="text-gray-600 text-center">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Quy trình sản xuất */}
        <section className="mb-20">
          <div className="bg-red-600 rounded-2xl overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/2 p-8 md:p-12 text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Quy trình sản xuất chuẩn</h2>
                <p className="mb-8 text-red-100">Mỗi lọ tương ớt đều trải qua quy trình nghiêm ngặt để đảm bảo chất lượng tốt nhất</p>
                
                <div className="space-y-6">
                  {[
                    "Chọn lọc nguyên liệu",
                    "Sơ chế và phối trộn",
                    "Lên men tự nhiên",
                    "Đóng gói vô trùng",
                    "Kiểm định chất lượng"
                  ].map((step, index) => (
                    <div key={index} className="flex items-start">
                      <div className="bg-white text-red-600 rounded-full w-6 h-6 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                        {index + 1}
                      </div>
                      <span className="text-lg">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:w-1/2">
                <img
                  src="https://dntt.mediacdn.vn/197608888129458176/2024/9/9/ot-172588347007226990762.png"
                  alt="Quy trình sản xuất"
                  className="w-full h-full object-cover min-h-[300px]"
                />
              </div>
            </div>
          </div>
        </section>

 
      </div>
    </div>
  );
}