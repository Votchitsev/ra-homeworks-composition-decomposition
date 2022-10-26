function TvPropgramm({ data }) {
  return (
    <div className="main-services-item--content">
      { data.items.map(item => <div key={ item.id } className="tv-programm-item">
        <span className="tv-programm-item--time">{ item.time }</span>
        <span>{ ` ${item.content}` }</span>
        <span className="chanel">{ ` ${item.chanel}` }</span>
      </div>) }
    </div>
  )
}

export default TvPropgramm;
