export interface Article {
    source: { id: string | null; name: string };
    author: string | null;
    title: string;
    description: string | null;
    url: string;
    urlToImage: string | null;
    publishedAt: string;
    content: string | null;
}

export interface NewsResponse {
    status: string;
    totalResults: number;
    articles: Article[];
}

export interface Source {
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
}

export interface SourcesResponse {
    status: string;
    sources: Source[];
}

export enum DefaultSources {
    BBC = 'bbc-news',
    CNN = 'cnn',
    FOX = 'fox-news',
    GOOGLE = 'google-news',
    TECHCRUNCH = 'techcrunch',
}

export type RequestOptions = Partial<{
    q: string;
    sources: string;
    pageSize: number;
    page: number;
    apiKey?: string;
}>;
