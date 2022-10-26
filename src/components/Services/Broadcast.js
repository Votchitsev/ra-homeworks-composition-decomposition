/**
 * Компонент отображает карточку "Эфир".
 */

import play from './play.svg';

function Broadcast({ data }) {
  return (
    <div className="main-services-item--content">
      { data.items.map(item => <div key={ item.id } className="broadcast-item">
        <img src={play} alt="logo" />
        <span>{ ` ${item.content}` }</span>
        <span className="chanel">{ ` ${item.chanel}` }</span>
      </div>) }
    </div>
  )
}

export default Broadcast;
