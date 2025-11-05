import React from "react";
import {NewsArticle} from "@/types";

export default function NewsPreview({ article }: { article: NewsArticle }) {
    return (
        <div className="bg-blue-100 rounded-xl p-4 m-2 max-w-xl">
            <a href={article.url} className="text-lg font-semibold text-blue-700 hover:underline">
                {article.title}
            </a>
            <p className="text-sm text-gray-700 mt-1">{article.author || "Unknown Author"}</p>
            <p className="text-sm text-gray-600 mt-2">{article.description}</p>
        </div>
    );
}
