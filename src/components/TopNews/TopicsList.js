/**
 * Компонент отображает список ТОП-новостей
 */

import logo from './icon.svg';
import parseDate from '../../parseDate';

function TopicsList ({ topics }) {
  return (
    <div className="topics">
      <ul className="topic-list">
        { topics.map(topic => <li className="topic-name" key={ topic.id }>{ topic.topicName }</li>) }
        <div className="topic-list--date">{ parseDate(Date.now()) }</div>
      </ul> 
      <ul className="articles-list">
        { topics[0].articles.map( topic => <li className="article-title" key={ topic.id }>
          <img className="article-icon" src={logo} alt='Logo'></img>
          <span>{ topic.title }</span>
        </li>)}
      </ul>
    </div>
    
  )
}

export default TopicsList;
