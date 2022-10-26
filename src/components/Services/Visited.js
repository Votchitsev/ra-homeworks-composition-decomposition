function Visited({ data }) {
  return (
    <div className="main-services-item--content">
      { data.items.map(item => <div key={ item.id }className="visited-item">
        <span className="visited-item--title">{ item.title }</span>
        <span>{ ` - ${item.content}` }</span>
      </div>) }
    </div>
  )
} 
export default Visited;
