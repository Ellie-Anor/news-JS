import Loader from './loader';
import { RequestOptions } from '../../types';

class AppLoader extends Loader {
    constructor() {
        const apiUrl: string = process.env.API_URL ?? 'https://rss-news-api.onrender.com/';
        const options: RequestOptions = { apiKey: process.env.API_KEY };
        super(apiUrl, options);
    }
}

export default AppLoader;
