import Loader from './loader';
import { RequestOptions } from '../../../types';

class AppLoader extends Loader {
    constructor() {
        const apiUrl = process.env.API_URL || 'https://rss-news-api.onrender.com/';
        const apiKey = process.env.API_KEY || '';
        
        const options: RequestOptions = {
            apiKey: apiKey,
        };
        
        super(apiUrl, options);
    }
}

export default AppLoader;