import { news } from '../data/news';
import NewsCard from '../components/NewsCard';

export default function News() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Tin tức & Blog</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {news.map(newsItem => (
          <NewsCard key={newsItem.id} newsItem={newsItem} />
        ))}
      </div>
    </div>
  );
}