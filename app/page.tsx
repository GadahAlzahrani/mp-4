import getNews from "@/lib/getNews";
import NewsPreview from "@/components/NewsPreview";
import {NewsArticle} from "@/types";

export default async function Home() {
    const articles = await getNews();

    if ("error" in articles) {
        return (
            <main className="p-8 text-center text-red-600">
                <h1 className="text-2xl font-bold mb-4">Error</h1>
                <p>{articles.error}</p>
            </main>
        );
    }

    return (
        <main className="p-6 flex flex-col items-center">
            <h1 className="text-3xl font-bold mb-4">Latest News</h1>
            {articles.map((article: NewsArticle) => (
                <NewsPreview key={article.id || article.url} article={article} />
            ))}
        </main>
    );
}