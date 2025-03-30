import { Link } from 'react-router-dom';

export default function NewsCard({ newsItem }) {
  return (
    <div className="group relative rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 h-96">
      {/* Background Image */}
      <Link to={`/news/${newsItem.id}`} className="absolute inset-0">
        <img 
          src={newsItem.image} 
          alt={newsItem.title} 
          className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
      </Link>
      
      {/* Category Tag - Updated color */}
      <div className="absolute top-4 left-4 z-10">
        <span className="inline-block bg-white/90 text-[#c0392b] text-xs font-bold px-3 py-1 rounded-full">
          {newsItem.category}
        </span>
      </div>
      
      {/* Text Content Overlay - Updated colors */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <div className="bg-white/90 backdrop-blur-sm rounded-lg p-5 shadow-sm">
          <h3 className="text-lg font-bold text-gray-800 mb-2 leading-tight">
            <Link to={`/news/${newsItem.id}`} className="hover:text-[#c0392b] transition">
              {newsItem.title}
            </Link>
          </h3>
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">
            {newsItem.summary}
          </p>
          <div className="flex justify-between items-center pt-2 border-t border-gray-200/50">
            <span className="text-gray-500 text-xs">{newsItem.date}</span>
            <Link 
              to={`/news/${newsItem.id}`} 
              className="text-[#c0392b] hover:text-[#a53125] font-medium text-sm flex items-center"
            >
              Đọc thêm
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-4 w-4 ml-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}