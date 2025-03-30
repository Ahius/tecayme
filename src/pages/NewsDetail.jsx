import { useParams } from 'react-router-dom';
import { news } from '../data/news';
import { Link } from 'react-router-dom';
import NewsCard from '../components/NewsCard';

export default function NewsDetail() {
  const { id } = useParams();
  const newsItem = news.find(n => n.id === parseInt(id));
  
  if (!newsItem) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-3xl font-bold mb-4">Bài viết không tồn tại</h1>
        <Link to="/news" className="text-blue-600 hover:text-blue-800">
          ← Quay lại danh sách tin tức
        </Link>
      </div>
    );
  }

  // Tạo hàm render HTML content
  const createMarkup = (htmlContent) => {
    return { __html: htmlContent };
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-6">
        <Link 
          to="/news" 
          className="inline-flex items-center text-red-600 hover:text-red-800 transition"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 mr-1" 
            viewBox="0 0 20 20" 
            fill="currentColor"
          >
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Quay lại tin tức
        </Link>
      </div>
      
      <article className="mb-12">
        <div className="mb-6">
          <span className="inline-block bg-red-100 text-red-800 text-xs font-semibold px-3 py-1 rounded-full mb-3">
            {newsItem.category || 'PHONG THỦY'}
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">{newsItem.title}</h1>
          <p className="text-gray-500">Ngày đăng: {newsItem.date}</p>
        </div>
        
        <img 
          src={newsItem.image} 
          alt={newsItem.title} 
          className="w-full h-auto rounded-xl mb-8 shadow-md"
        />
        
        <div className="prose max-w-none text-gray-700">
          <p className="text-lg leading-relaxed mb-6">{newsItem.summary}</p>
          
          {/* Sử dụng dangerouslySetInnerHTML để render HTML */}
          <div 
            className="space-y-4"
            dangerouslySetInnerHTML={createMarkup(newsItem.content)}
          />
        </div>
      </article>
      
      <div className="mt-12 border-t pt-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Bài viết liên quan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {news
            .filter(n => n.id !== newsItem.id)
            .slice(0, 2)
            .map(relatedNews => (
              <NewsCard key={relatedNews.id} newsItem={relatedNews} />
            ))}
        </div>
      </div>
    </div>
  );
}