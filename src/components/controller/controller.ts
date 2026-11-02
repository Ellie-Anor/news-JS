import AppLoader from './appLoader';
import { Article, Source, RequestOptions } from '../../types';

class AppController extends AppLoader {
    public getSources(callback: (data: { sources: Source[] }) => void): void {
        super.getResp<{ sources: Source[] }>(
            {
                endpoint: 'sources',
            },
            callback
        );
    }

    public getNews(e: Event, callback: (data: { articles: Article[] }) => void): void {
        let target = e.target as HTMLElement;
        const newsContainer = e.currentTarget as HTMLElement;

        while (target !== newsContainer) {
            if (target.classList.contains('source__item')) {
                const sourceId = target.getAttribute('data-source-id');
                if (newsContainer.getAttribute('data-source') !== sourceId && sourceId) {
                    newsContainer.setAttribute('data-source', sourceId);

                    const options: RequestOptions = {
                        sources: sourceId,
                    };

                    super.getResp<{ articles: Article[] }>(
                        {
                            endpoint: 'everything',
                            options: options,
                        },
                        callback
                    );
                }
                return;
            }
            if (target.parentNode) {
                target = target.parentNode as HTMLElement;
            } else {
                break;
            }
        }
    }
}

export default AppController;
