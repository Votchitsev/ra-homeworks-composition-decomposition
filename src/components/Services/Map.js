function Map({ data }) {
  return (
    <div className="main-services-item">
      <div className="main-services-item--title">{ data.title }</div>
      <div className="map">{ data.content }</div>
    </div>
  )
}

export default Map;
