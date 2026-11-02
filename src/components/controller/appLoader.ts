import Loader from './loader';
import { RequestOptions } from '../../types';

class AppLoader extends Loader {
    constructor() {
        const apiUrl = 'https://rss-news-api.onrender.com/';
        const options: RequestOptions = {};
        super(apiUrl, options);
    }
}

export default AppLoader;
