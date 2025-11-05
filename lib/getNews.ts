"use server";

export default async function getNews() {
    const apiKey = process.env.CURRENTS_API_KEY;
    if (!apiKey) throw new Error("Missing API key");

    try {
        const res = await fetch(
            `https://api.currentsapi.services/v1/latest-news?apiKey=${apiKey}` );

        if (!res.ok) {
            const errorText = await res.text();
            console.error("API Error:", res.status, errorText);

            if (res.status === 429) {
                throw new Error("You’ve reached the daily API call limit. Please try again tomorrow.");
            }
            throw new Error("Failed to fetch news. Please try again later.");
        }

        const data = await res.json();
        return data.news.slice(0, 30);

    } catch (err) {
        console.error("Fetch failed:", err);

        if (err instanceof Error) {
            return { error: err.message };
        }
        return { error: String(err) };
    }

}

