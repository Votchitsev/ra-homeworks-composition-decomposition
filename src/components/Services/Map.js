/**
 * Компонент отображает карточку "Карта Германии".
 */

function Map({ data }) {
  return (
      <div className="map">{ data.content }</div>
    )
}

export default Map;
