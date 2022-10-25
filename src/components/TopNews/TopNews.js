import TopicsList from './TopicsList';
import './TopNews.css';
import Rates from './Rates';

/**
 * Компоннет отвечает за отображение тем и заголовков новостей
 */

function TopNews({ data }) {
    return(
      <div className="top-news">
        <TopicsList topics={ data.topNews }/>
        <Rates rates={ data.rates }/>
      </div>
    )
}

export default TopNews;
